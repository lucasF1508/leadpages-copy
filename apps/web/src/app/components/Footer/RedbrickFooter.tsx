import DeliveraSVG from '@legacy/assets/images/logos/delivra-logo-black.svg'
import ShiftSVG from '@legacy/assets/images/logos/shift-logo-black-alt.svg'
import AnimotoSVG from '@public/images/animoto-logo.svg'
import DuplexSVG from '@public/images/duplex-logo.svg'
import LeadpagesSVG from '@public/images/logo.svg'
import Image from '@/components/Image'

const RedbrickFooter = () => (
  <div className="pt-5 md:pt-8 type-caption-xxs text-body-neutral-body text-center">
    Leadpages is part of the{' '}
    <a
      className="!text-body-neutral-body underline"
      href="https://rdbrck.com?utm_source=leadpages"
      rel="noreferrer noopener"
      target="_blank"
    >
      Redbrick
    </a>{' '}
    family of brands.
    <div className="mt-5 flex flex-row items-start justify-center gap-6 flex-wrap">
      <a
        href="https://animoto.com?utm_source=leadpages"
        rel="noreferrer noopener"
        target="_blank"
      >
        <Image alt="Animoto Logo" height={32} image={AnimotoSVG} width={116} />
      </a>
      <a
        href="https://www.delivra.com?utm_source=leadpages"
        rel="noreferrer noopener"
        target="_blank"
      >
        <Image alt="Delivera Logo" height={43} image={DeliveraSVG} width={83} />
      </a>
      <a
        href="https://www.duplex.com?utm_source=leadpages"
        rel="noreferrer noopener"
        target="_blank"
      >
        <Image alt="Duplex Logo" height={24} image={DuplexSVG} width={72} />
      </a>
      <a
        href="https://leadpages.com/"
        rel="noreferrer noopener"
        target="_blank"
      >
        <Image
          alt="Leadpages Logo"
          height={32}
          image={LeadpagesSVG}
          width={120}
        />
      </a>
      <a
        href="https://shift.com?utm_source=leadpages"
        rel="noreferrer noopener"
        target="_blank"
      >
        <Image alt="Shift Logo" height={32} image={ShiftSVG} width={83} />
      </a>
    </div>
  </div>
)

export default RedbrickFooter
