/* --- Base ------------------------------------------------------------------------------------- */
import { Svg } from './icons/Icons';
import { SvgSizeConfig } from './Pelak';
/* --- Functions -------------------------------------------------------------------------------- */
/* --- Icon --------------------------------------------------------- */
export function Icon({
	Icon = "default",
	Stroke = SvgSizeConfig.Default,
	Active = false,
	ActiveFit = false,
	className,
	...props
}: React.ComponentProps<"svg"> & {
	Icon?: keyof typeof Svg
	Stroke?: keyof typeof SvgSizeConfig.Items
	Active?: boolean
	ActiveFit?: boolean
}) {
	/* --- Run ------------------------- */
	return (

		<svg className={className} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 50 50" {...props}>
			{(Active || ActiveFit) &&
				<g fill="currentColor" stroke="currentColor" strokeWidth={Active ? 12 : 0} opacity={SvgSizeConfig.Base}>
					{Svg[Icon].active}
				</g>
			}
			<g strokeWidth={SvgSizeConfig.Items[Stroke]} fill="none" stroke="currentColor">
				{Svg[Icon].shape}
			</g>
		</svg>

	);
}