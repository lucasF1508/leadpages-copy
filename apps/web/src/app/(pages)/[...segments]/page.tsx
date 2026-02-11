import type { ResolvingMetadata } from 'next'
import { generateMetadataStatic } from '@/lib/utils/generateMetadata/generateMetadataStatic'
import { GenerateMetadataProps } from '@/lib/utils/generateMetadata/generateMetadata'
import { getStaticPathsParams } from '@/lib/queries'
import { query, componentsQuery, joinPath } from '@/lib/queries'
import { draftMode } from 'next/headers'
import Layout from '@/components/Layout'
import PricingStructuredData from '@/components/PricingStructuredData'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import Script from 'next/script'

// Prevent unspecified paths from being statically rendered at runtime
export const dynamicParams = false

// Revalidate every hour to pick up CMS changes (including pricing link updates)
export const revalidate = 3600

export async function generateStaticParams() {
  const params = await getStaticPathsParams({ catchAll: '/', types: ['page'] })
  const paths = params.map(({ params: { slug } }: any) => ({
    segments: slug,
  }))
  return paths
}

export async function generateMetadata(
  { params }: GenerateMetadataProps,
  parent: ResolvingMetadata
) {
  const { segments } = await params
  const path = joinPath(segments)
  return await generateMetadataStatic({ parent, path, types: ['page'] })
}

export default async function Page({
  params,
}: {
  params: Promise<{ segments: string[] }>
}) {
  const { segments = [] } = await params
  const rawPath = joinPath(segments)
  const withLeadingSlash =
    rawPath && rawPath.startsWith('/') ? rawPath : `/${rawPath || ''}`
  const withoutTrailingSlash =
    withLeadingSlash === '/' ? '/' : withLeadingSlash.replace(/\/+$/g, '') || '/'
  const normalizedPath = withoutTrailingSlash
  const alternatePath = normalizedPath.replace(/^\/+/g, '')
  const legacyPath = alternatePath.replace(/\/+$/g, '')

  const normalized = (s: string) => s.replace(/^\/|\/$/g, '')
  const isPricingPage =
    normalized(normalizedPath) === 'pricing' ||
    normalized(segments.join('/')) === 'pricing'
  const isPricing = isPricingPage

  // For pricing page, bypass CDN to get fresh data (important for updated Verifone links)
  const pageQueryResult = query(
    `*[_type == 'page' && (path == $path || path == $alternatePath || path == $legacyPath)] | order(_updatedAt desc) [0]{
      _id,
      _updatedAt,
      path,
      ...,
      ${componentsQuery}
    }`,
    {
      preview: draftMode().isEnabled,
      // @ts-ignore - useCdn is supported in query.js but not in query.ts types yet
      useCdn: !isPricing, // Disable CDN for pricing page to bypass cache
      params: {
        alternatePath,
        legacyPath,
        path: normalizedPath,
      },
    }
  )
  
  const pageData = await pageQueryResult?.data ?? null
  const components = pageData?.components ?? []
  const hero = pageData?.hero ?? []

  const heroData = Array.isArray(hero) ? hero[0] : hero
  const pricingPlans = heroData?._type === 'heroPricing' ? heroData.plans : null

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    ...segments.map((segment: string, i: number) => ({
      name: segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c: string) => c.toUpperCase()),
      path: `/${segments.slice(0, i + 1).join('/')}`,
    })),
  ]

  return (
    <>
      {segments.length > 0 && <BreadcrumbJsonLd items={breadcrumbs} />}
      {isPricingPage && pricingPlans && (
        <PricingStructuredData plans={pricingPlans} />
      )}

      {isPricingPage && (
        <>
          <link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
          <Script id="vwoCode" strategy="beforeInteractive">
{`window._vwo_code || (function(){var account_id=276740,version=2.1,settings_tolerance=2000,hide_element='body',hide_element_style='opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;transition:none !important;',f=false,w=window,d=document,v=d.querySelector('#vwoCode'),cK='_vwo_'+account_id+'_settings',cc={};try{var c=JSON.parse(localStorage.getItem('_vwo_'+account_id+'_config'));cc=c&&typeof c==='object'?c:{}}catch(e){}var stT=cc.stT==='session'?w.sessionStorage:w.localStorage;code={nonce:v&&v.nonce,use_existing_jquery:function(){return typeof use_existing_jquery!=='undefined'?use_existing_jquery:undefined},library_tolerance:function(){return typeof library_tolerance!=='undefined'?library_tolerance:undefined},settings_tolerance:function(){return cc.sT||settings_tolerance},hide_element_style:function(){return'{'+(cc.hES||hide_element_style)+'}'},hide_element:function(){if(performance.getEntriesByName('first-contentful-paint')[0]){return''}return typeof cc.hE==='string'?cc.hE:hide_element},getVersion:function(){return version},finish:function(e){if(!f){f=true;var t=d.getElementById('_vis_opt_path_hides');if(t)t.parentNode.removeChild(t);if(e)(new Image).src='https://dev.visualwebsiteoptimizer.com/ee.gif?a='+account_id+e}},finished:function(){return f},addScript:function(e){var t=d.createElement('script');t.type='text/javascript';if(e.src){t.src=e.src}else{t.text=e.text}v&&t.setAttribute('nonce',v.nonce);d.getElementsByTagName('head')[0].appendChild(t)},load:function(e,t){var n=this.getSettings(),i=d.createElement('script'),r=this;t=t||{};if(n){i.textContent=n;d.getElementsByTagName('head')[0].appendChild(i);if(!w.VWO||VWO.caE){stT.removeItem(cK);r.load(e)}}else{var o=new XMLHttpRequest;o.open('GET',e,true);o.withCredentials=!t.dSC;o.responseType=t.responseType||'text';o.onload=function(){if(t.onloadCb){return t.onloadCb(o,e)}if(o.status===200||o.status===304){_vwo_code.addScript({text:o.responseText})}else{_vwo_code.finish('&e=loading_failure:'+e)}};o.onerror=function(){if(t.onerrorCb){return t.onerrorCb(e)}_vwo_code.finish('&e=loading_failure:'+e)};o.send()}},getSettings:function(){try{var e=stT.getItem(cK);if(!e){return}e=JSON.parse(e);if(Date.now()>e.e){stT.removeItem(cK);return}return e.s}catch(e){return}},init:function(){if(d.URL.indexOf('__vwo_disable__')>-1)return;var e=this.settings_tolerance();w._vwo_settings_timer=setTimeout(function(){_vwo_code.finish();stT.removeItem(cK)},e);var t;if(this.hide_element()!=='body'){t=d.createElement('style');var n=this.hide_element(),i=n?n+this.hide_element_style():'',r=d.getElementsByTagName('head')[0];t.setAttribute('id','_vis_opt_path_hides');v&&t.setAttribute('nonce',v.nonce);t.setAttribute('type','text/css');if(t.styleSheet)t.styleSheet.cssText=i;else t.appendChild(d.createTextNode(i));r.appendChild(t)}else{t=d.getElementsByTagName('head')[0];var i=d.createElement('div');i.style.cssText='z-index:2147483647!important;position:fixed!important;left:0!important;top:0!important;width:100%!important;height:100%!important;background:white!important;display:block!important;';i.setAttribute('id','_vis_opt_path_hides');i.classList.add('_vis_hide_layer');t.parentNode.insertBefore(i,t.nextSibling)}var o=window._vis_opt_url||d.URL,s='https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(o)+'&vn='+version;if(w.location.search.indexOf('_vwo_xhr')!==-1){this.addScript({src:s})}else{this.load(s+'&x=true')}}};w._vwo_code=code;code.init();})();`}
          </Script>

          <Script id="vfPatchCtas" strategy="afterInteractive">
{`
(function(){
  var MAP = {
    'fvnp9stiiu14': { cls: 'standard_monthly', vwo: 'std_mo' },
    'lamghdv4qr14': { cls: 'standard_annual',  vwo: 'std_yr' },
    'rv7qq6f68t14': { cls: 'pro_monthly',      vwo: 'pro_mo' },
    'jh4rs6oedh14': { cls: 'pro_annual',       vwo: 'pro_yr' },
  };

  // Map Verifone product codes to VWO IDs
  var VERIFONE_MAP = {
    'STD-TR-M-14D': { cls: 'standard_monthly', vwo: 'std_mo' },
    'STD-TR-A-14D': { cls: 'standard_annual',  vwo: 'std_yr' },
    'PRO-TR-M-14D': { cls: 'pro_monthly',      vwo: 'pro_mo' },
    'PRO-TR-A-14D': { cls: 'pro_annual',       vwo: 'pro_yr' },
    'ADV-TR-M-14D': { cls: 'advanced_monthly', vwo: 'adv_mo' },
    'ADV-TR-A-14D': { cls: 'advanced_annual',  vwo: 'adv_yr' },
  };

  function extractPlanId(href){
    try {
      var m = href.match(/order-leadpages\\/([^/]+)/);
      return m && m[1] ? m[1] : null;
    } catch(e){ return null; }
  }

  function extractVerifoneProductCode(href){
    try {
      // Match patterns like /signup/STD-TR-M-14D/ or /signup/STD-TR-M-14D
      var m = href.match(/signup\\/([A-Z0-9-]+)/);
      return m && m[1] ? m[1] : null;
    } catch(e){ return null; }
  }

  function tagAndPatchAnchor(a){
    try {
      var href = a.href || a.getAttribute('href') || '';
      if (!href) return;

      // Check if it's a Verifone URL
      var verifoneCode = extractVerifoneProductCode(href);
      if (verifoneCode && VERIFONE_MAP[verifoneCode]) {
        var meta = VERIFONE_MAP[verifoneCode];
        a.classList.remove('standard_monthly','standard_annual','pro_monthly','pro_annual','advanced_monthly','advanced_annual');
        a.classList.add(meta.cls);

        var u = new URL(href);
        if (!u.searchParams.get('vwo_id')) u.searchParams.set('vwo_id', meta.vwo);
        if (!u.searchParams.get('_fsRef')) u.searchParams.set('_fsRef','https://www.leadpages.com/pricing');
        a.href = u.toString();
        return;
      }

      // Check if it's a Recurly URL (legacy)
      var planId = extractPlanId(href);
      var meta = planId && MAP[planId] ? MAP[planId] : null;
      if (!meta) return;

      a.classList.remove('standard_monthly','standard_annual','pro_monthly','pro_annual');
      a.classList.add(meta.cls);

      var u = new URL(href);
      if (!u.searchParams.get('vwo_id')) u.searchParams.set('vwo_id', meta.vwo);
      if (!u.searchParams.get('_fsRef')) u.searchParams.set('_fsRef','https://www.leadpages.com/pricing');
      a.href = u.toString();
    } catch(e){}
  }

  function run(){
    // Process both Recurly and Verifone URLs
    document
      .querySelectorAll('a[href*="my.leadpages.com/order-leadpages/"], a[href*="my.leadpages.com/signup/"], a[href*="my.leadpagestest.com/signup/"]')
      .forEach(tagAndPatchAnchor);
  }

  run();

  var obs = new MutationObserver(run);
  obs.observe(document.body, { childList: true, subtree: true });

  document.addEventListener('click', function(e){
    var a = e.target && e.target.closest && e.target.closest('a');
    if (a && (a.href && (a.href.includes('order-leadpages') || a.href.includes('/signup/')))) {
      tagAndPatchAnchor(a);
    }
  }, true);
})();
`}
          </Script>
        </>
      )}

      <Layout data={{ hero, components }} />
    </>
  )
}
