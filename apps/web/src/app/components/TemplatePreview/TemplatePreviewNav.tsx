import {
  Root as DropdownMenuRoot,
  Trigger as DropdownMenuTrigger,
  Content as DropdownMenuContent,
  Item as DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu'
import { TemplateType } from "@/types/template"
import { getKindSlug, getKindTitle, getTemplateUrl } from "@/lib/utils/getKindSlug"
import { capitalize } from "lodash"
import TemplateNavLogo from "./TemplateNavLogo"
import TemplateNavCarat from "./TemplateNavCarat"
import Link from "@/components/Link"
import { Dispatch, SetStateAction, useState } from 'react'
import clsx from 'clsx'
import useMediaQuery from '@/hooks/useMediaQuery'

interface TemplatePreviewNavProps {
  categories: TemplateType['categories']
  kind: TemplateType['kind']
  title: TemplateType['title']
	slug: TemplateType['slug']
}

const Item = ({
	children, 
	disabled, 
	setOpen,
	isCurrent = false
}:{
	children: React.ReactNode, 
	disabled?: boolean, 
	setOpen: Dispatch<SetStateAction<boolean>>
	isCurrent?: boolean
}) => {
	return (
		<DropdownMenuItem 
			className={
				clsx(
					"px-1.5 py-1 text-body-disabled rounded-sm transition-colors duration-200 focus-visible:outline-none",
					!isCurrent && "hover:text-light hover:bg-surface-neutral-opacity",
					isCurrent && "!text-white cursor-default"
				)
			} 
			disabled={disabled}
			onClick={() => setOpen(false)}
		>
			{children}
		</DropdownMenuItem>
	)
}

const TemplatePreviewNav = ({ categories, kind, title, slug }: TemplatePreviewNavProps) => {
	const isMobile = useMediaQuery('(max-width: 640px)')
	const [open, setOpen] = useState(false)
	const category = categories?.[0]
  const leading = getKindTitle(kind)
	const kindSlug = getKindSlug(kind)
	const detailsUrl = getTemplateUrl(kind, slug.current)
	const { label } = category || {}
	const categorySlug = category?.value
	

	return (
		<DropdownMenuRoot open={open} onOpenChange={setOpen}>
			<div className="flex items-center gap-2">
				<Link
					condition="internal"
					hasIcon={false}
					href={`/`}
				>
					<TemplateNavLogo />
				</Link>
				<DropdownMenuTrigger asChild>
					<button
						aria-label="Template Preview Navigation"
					>
						<h2 className="type-h4 flex items-center gap-1 group">
							<span className='hidden sm:inline'>Made in Leadpages</span>
							<span className={clsx(
								"group-hover:bg-surface-neutral-opacity transition-colors duration-200",
								"w-3 h-3 bg-dark flex justify-center items-center rounded",
								open && "bg-surface-neutral-opacity"
							)}>
								<TemplateNavCarat />
							</span>
						</h2>
					</button>
				</DropdownMenuTrigger>
			</div>

				<DropdownMenuContent
					className={clsx(
						"type-caption-xs bg-dark border border-border-muted p-0.5 rounded-md max-w-[13.75rem]",
						"transition-all transform",
						"data-[state=open]:animate-[fade-in-down_250ms_ease] data-[state=closed]:animate-[fade-out-up_250ms_ease]"
					)}
					side="bottom"
					align={isMobile ? "start" : "end"}
					sideOffset={10}
					alignOffset={isMobile ? 0 : -4}
				>
					<Link
						condition="internal"
						className="focus-visible:outline-none"
						hasIcon={false}
						href={`/${kindSlug}`}
					>
						<Item setOpen={setOpen}>
							{leading} Template
						</Item>
					</Link>
					{label && (
						<Link
							condition="internal"
							hasIcon={false}
							href={`/${kindSlug}/category/${categorySlug}`}
						>
							<Item setOpen={setOpen}>
								{capitalize(label)}
							</Item>
						</Link>
					)}
					<Link
						condition="internal"
						className="border-none"
						hasIcon={false}
						href={detailsUrl}
					>
						<Item setOpen={setOpen}>
							Template Details
						</Item>
					</Link>
					<h1
					>
						<Item
							setOpen={setOpen}
							disabled
							isCurrent
						>
							{title}	
						</Item>
					</h1>
				</DropdownMenuContent>
		</DropdownMenuRoot>
	);
};

export default TemplatePreviewNav;