import {
	FONTSTYLE,
	FONTWEIGHT,
	TITLELINKTARGET,
	LEGENDTYPE,
	LEGENDORIENT,
} from '../constant'
import { XAXISPOSITION } from '../constant/xAxis'
import { YAXISPOSITION } from '../constant/yAxis'
import {
	AXISTYPE,
	AXISNAMELOCATIONTYPE,
	AXISLINETYPE,
	AXISLINECAP,
	AXISLINEJOIN,
} from '../constant/batchAxis'
import { TOOLTIPTIGGER } from '../constant/tooltip'

export const COLORS = [
	'#6174F5',
	'#5EA5FF',
	'#6FC4FF',
	'#54F3FF',
	'#FACF14',
	'#E36D6F',
	'#8F4EED',
	'#B8E986',
	'#FF2366',
	'#F5A623',
]

export const BACKGROUNDCOLOR = '#13183000'

export const BORDERCOLOR = 'rgba(0, 0, 0, 0.1)'

export const FONTCOLOR = '#9aabbd'

export const FONTFAMILY = '"Helvetica Neue", "Helvetica", "Arial", sans-serif'

export const FONTLINEHEIGHT = 1.5

export const TOOLTIPTRIGGER = 'axis'

export const LEGENDPAGEICONCOLOR = '#aaa'

export const LEGENDPAGEICONINACITVECOLOR = '#2f4554'

export const GRID = {
	top: '10%',
	bottom: '10%',
	left: '10%',
	right: '10%',
}

export const INITFONTSTYLE = {
	color: FONTCOLOR,
	fontStyle: Object.keys(FONTSTYLE)[0],
	fontWeight: Object.keys(FONTWEIGHT)[0],
	fontFamily: 'sans-serif',
	fontSize: 18,
  textAlign: 'auto',
  textVerticalAlign: 'auto',
	...GRID,
}

export const INITSERIES = {
  radius: ["55%", "70%"],
  center: ["60%", "50%"],
}

export const INITTITLES = {
	show: true,
	top: 10,
	left: 10,
	target: Object.keys(TITLELINKTARGET)[0],
	subtarget: Object.keys(TITLELINKTARGET)[0],
}

export const RECT = {
	width: 'auto',
	height: 'auto',
	backgroundColor: 'transparent',
}

export const LEGEND = {
	show: true,
	left: '2%',
	top: 'middle',
	icon: 'circle',
	itemGap: 15,
	type: Object.keys(LEGENDTYPE)[0],
	orient: Object.keys(LEGENDORIENT)[1],
}

export const TOOLTIP = {
	show: true,
	showContent: true,
  alwaysShowContent: false,
  confine: false,
  enterable: false,
  hideDelay: 100,
  trigger: Object.keys(TOOLTIPTIGGER)[1],
  triggerOn: 'mousemove|click'
}

export const XAXIS = {
	show: false,
	position: Object.keys(XAXISPOSITION)[0],
	type: Object.keys(AXISTYPE)[1],
	nameGap: 15,
	nameLocation: Object.keys(AXISNAMELOCATIONTYPE)[0],
	axisLabel: {
		formatter: (value, index) => value,
	},
}

export const YAXIS = {
	show: false,
	position: Object.keys(YAXISPOSITION)[0],
	type: Object.keys(AXISTYPE)[0],
	nameGap: 15,
	nameLocation: Object.keys(AXISNAMELOCATIONTYPE)[0],
	axisLabel: {
		formatter: (value, index) => value,
	},
}

export const LINESTYLE = {
	color: BORDERCOLOR,
	width: 1,
	type: Object.keys(AXISLINETYPE)[0],
	dashOffset: 0,
	cap: Object.keys(AXISLINECAP)[0],
	join: Object.keys(AXISLINEJOIN)[0],
	miterLimit: 10,
	opacity: 1,
}

export const AXISLINE = {
	show: true,
	onZero: true,
	lineStyle: LINESTYLE,
}

export const AXISTICK = {
	show: true,
	alignWithLabel: false,
	length: 5,
	inside: false,
	lineStyle: LINESTYLE,
}

export const SPLITLINE = {
	show: true,
	lineStyle: LINESTYLE,
}

export const AXISLABELWITHOUTRECT = {
	show: true,
	inside: false,
	margin: 8,
	...INITFONTSTYLE,
}

export const AXISLABEL = {
	...AXISLABELWITHOUTRECT,
	...RECT,
}

export const RADARGRID = {
	top: '50%',
	left: '50%',
	radius: '75%',
}

export const PIEGRID = {
	top: '50%',
	left: '50%',
	innerRadius: 0,
	outRadius: '75%',
}

export const ANIMATION = {
  animation: true,
  animationThreshold: 2000,
  animationDuration: 1000,
  animationDurationUpdate: 300,
  animationEasing: 'cubicOut',
  animationEasingUpdate: 'cubicInOut',
  animationDelay: 0,
  animationDelayUpdate: 0,
}
