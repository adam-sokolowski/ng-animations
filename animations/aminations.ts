import {
  trigger,
  animate,
  style,
  transition,
  query,
  stagger,
  keyframes
} from "@angular/animations";

/**
 * Expand/Collapse animation when showing accordion content
 *
 * Takes `time: string` as an optionsl argument with a default value of `250ms`
 * Function Trigger: `@expandCollapse`
 *
 * # Examples
 * ## HTML
 * ```html
 *	<div [@expandCollapse] *ngIf="yourConditionToShowStuff">
 * ```
 *
 * ## Import
 * ```TS
 *	import { expandCollapse } from "@ng-animations";
 * ```
 *
 * ## Component
 *```
 *	@Component({
 *		selector: "app-accordion-content",
 *		templateUrl: "./accordion-content.component.html",
 *		animations: [expandCollapse()],
 *		changeDetection: ChangeDetectionStrategy.OnPush
 *	})
 * ```
 */
export function expandCollapse(time = "250ms") {
  return trigger("expandCollapse", [
    transition(":enter", [
      style({
        opacity: 0,
        height: 0
      }),
      animate(
        time,
        style({
          opacity: 1,
          height: "100%"
        })
      )
    ]),
    transition(":leave", [
      style({
        opacity: 1,
        height: "100%"
      }),
      animate(
        time,
        style({
          opacity: 0,
          height: 0
        })
      )
    ])
  ]);
}

/**
 * Fade Out animation
 *
 * Takes `time: string` as an optionsl argument with a default value of `250ms`
 * Function Trigger: `@fadeOut`
 *
 * # Examples
 * ## HTML
 * ```html
 *	<div [@fadeOut] *ngIf="yourConditionToShowStuff">
 * ```
 *
 * ## Import
 * ```TS
 *	import { fadeOut } from "../utils/animations";
 * ```
 *
 * ## Component
 *```
 *	@Component({
 *		selector: "app-accordion-content",
 *		templateUrl: "./accordion-content.component.html",
 *		animations: [fadeOut()],
 *		changeDetection: ChangeDetectionStrategy.OnPush
 *	})
 * ```
 */
export function fadeOut(time = "250ms") {
  return trigger("fadeOut", [
    transition(":enter", [style({ opacity: 1 })]),
    transition(":leave", [animate(time, style({ opacity: 0 }))])
  ]);
}

/**
 * Fade In Fade Out animation
 *
 * Takes `time: string` as an optionsl argument with a default value of `250ms`
 * Function Trigger: `@fadeInOut`
 *
 * # Examples
 * ## HTML
 * ```html
 *	<div [@fadeInOut] *ngIf="yourConditionToShowStuff">
 * ```
 *
 * ## Import
 * ```TS
 *	import { fadeInOut } from "../utils/animations";
 * ```
 *
 * ## Component
 *```
 *	@Component({
 *		selector: "app-accordion-content",
 *		templateUrl: "./accordion-content.component.html",
 *		animations: [fadeInOut()],
 *		changeDetection: ChangeDetectionStrategy.OnPush
 *	})
 * ```
 */
export function fadeInOut(time = "250ms") {
  return trigger("fadeInOut", [
    transition(":enter", [
      style({ opacity: 0 }),
      animate(time, style({ opacity: 1 }))
    ]),
    transition(":leave", [animate(time, style({ opacity: 0 }))])
  ]);
}

/**
 * Show/hide left menu animation
 *
 * Takes `time: string` as an optionsl argument with a default value of `50ms`
 * Function Trigger: `@showHideMenu`
 *
 * # Examples
 * ## HTML
 * ```html
 *	<div [@showHideMenu] *ngIf="yourConditionToShowStuff">
 * ```
 *
 * ## Import
 * ```TS
 *	import { showHideMenu } from "../utils/animations";
 * ```
 *
 * ## Component
 *```
 *	@Component({

 *		animations: [showHideMenu()],
 *	})
 * ```
 */
export function showHideMenu(time = "50ms") {
  return trigger("showHideMenu", [
    transition("* => *", [
      query(":enter", style({ opacity: 0 }), { optional: true }),
      query(
        ":enter",
        stagger(time, [
          animate(
            ".15s ease-in",
            keyframes([
              style({ opacity: 0, transform: "translateX(10%)", offset: 0 }),
              style({ opacity: 0.5, transform: "translateX(5%)", offset: 0.5 }),
              style({ opacity: 1, transform: "translateX(0)", offset: 1.0 })
            ])
          )
        ]),
        { optional: true }
      ),
      query(
        ":leave",
        stagger(time, [
          animate(
            ".15s ease-out",
            keyframes([
              style({ opacity: 1, transform: "translateX(0)", offset: 0 }),
              style({ opacity: 0.5, transform: "translateX(5%)", offset: 0.5 }),
              style({ opacity: 0, transform: "translateX(10%)", offset: 1.0 })
            ])
          )
        ]),
        { optional: true }
      )
    ])
  ]);
}
