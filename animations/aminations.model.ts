export interface AnimationEvent {
	fromState: boolean;
	toState: boolean;
	totalTime: number;
	phaseName: string;
	element: any;
	triggerName: string;
}
