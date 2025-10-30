"use client"
import Link from 'next/link'
import s from './page.module.css'

export default function Client410() {
  return (
    <section aria-labelledby="lp410-title" className={s.lp410}>
      <div aria-hidden className={s.bg} />
      <div className={s.wrap}>
        <div className={s.logo}>
          <img
            alt="Leadpages"
            className={s.logoImg}
            height={18}
            src="https://user.lpcontent.net/images/SWj8CcTJn4MW4eGBBDcRXg/5Z8RiwJBV3YsVen4JEvn5H"
            width={120}
          />
        </div>

        <p className={s.kicker}>410 ERROR: PAGE REMOVED</p>
        <h1 className={s.title} id="lp410-title">
          Oops. This page has been removed.
        </h1>
        <p className={s.sub}>
          But we CAN help you make a great landing page (or route visitors to the right spot).
        </p>

      <Link className={s.cta} href="/" prefetch={false} replace>
  Try Leadpages Free
</Link>
      </div>
    </section>
  )
}
