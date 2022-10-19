import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { CanColor, mixinColor } from '@angular/material/core';

export type PaletteName =
  'red' |
  'pink' |
  'purple' |
  'deep-purple' |
  'indigo' |
  'blue' |
  'light-blue' |
  'cyan' |
  'teal' |
  'green' |
  'light-green' |
  'lime' |
  'yellow' |
  'amber' |
  'orange' |
  'deep-orange' |
  'brown' |
  'grey' |
  'gray' |
  'blue-grey' |
  'blue-gray';

// Boilerplate for applying mixins to IconAvatarDirective.
export class IconAvatarDirectiveBase {
  constructor(public _elementRef: ElementRef) { }
}
export const _IconAvatarDirectiveMixinBase = mixinColor(IconAvatarDirectiveBase);

@Directive({
  selector: '[icon-avatar], [iconAvatar]',
  inputs: ['color'],
  host: {
    'class': 'icon-avatar',
  },
  exportAs: 'iconAvatar'
})
export class IconAvatarDirective extends _IconAvatarDirectiveMixinBase implements CanColor {

  private _palette:PaletteName;

  @Input()
  get palette(): PaletteName { return this._palette; }
  set palette(value: PaletteName) {
    if (value !== this._palette) {
      const element: HTMLElement = this._elementRef.nativeElement;
      if (this._palette) {
        this.renderer.removeClass(element, `palette-${this._palette}`);
      }
      if (value) {
        this.renderer.addClass(element, `palette-${value}`);
      }
      this._palette = value;
    }
  }

  constructor(
    elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    super(elementRef);
    this._palette='red';
  }

}
