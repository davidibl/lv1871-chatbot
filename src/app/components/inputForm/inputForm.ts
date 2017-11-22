import { Component, Input, Output, EventEmitter, HostBinding, forwardRef, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR, AbstractControl } from '@angular/forms';

const CONTROL_VALUE_ACCESSOR = {
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputFormComponent),
};

@Component({
    moduleId: module.id,
    providers: [CONTROL_VALUE_ACCESSOR],
    selector: 'lv-input-form',
    templateUrl: 'inputForm.html',
    styleUrls: ['inputForm.scss'],
})
export class InputFormComponent extends ControlContainer implements ControlValueAccessor {

    @ViewChildren('input')
    private _inputs: QueryList<ElementRef>;

    private _value: string;
    private _touched = false;
    public _iconClass = 'none';

    public control: AbstractControl;

    @HostBinding('class.focused')
    public hasFocus: boolean;

    public get touched(): boolean {
        return this._touched;
    }

    @Input()
    public placeholder: string;

    @Input()
    public label: string;

    @Input()
    public name: string;

    @Input()
    public required: boolean;

    @Input()
    public hint: string;

    @Input()
    public validatable = true;

    @Input()
    public showLabel = true;

    @Input()
    public multiline = false;

    @Input()
    public autofocus = false;

    @Input()
    public rows = 3;

    @Input()
    public set iconClass(iconClass: string) {
        if (iconClass !== null && iconClass !== '') {
            this._iconClass = iconClass;
        }
    }

    @Input('ngModel')
    public set model(value: any) {
        if (value !== this._value) {
            this.setTouchedIfNot();
            this._value = value;
            if (!this.validateOnBlur || this.validateOnChangeAndBlur) {
                this._onChange(this._value);
            }
        }
    }

    public get model(): any {
        return this._value;
    }

    @Input()
    public validateOnBlur: boolean;

    @Input()
    public validateOnChangeAndBlur: boolean;

    public showTooltip: boolean;

    @Output()
    public blur: EventEmitter<void> = new EventEmitter<void>();

    @Output()
    public iconClick: EventEmitter<void> = new EventEmitter<void>();

    @Output()
    public focus: EventEmitter<void> = new EventEmitter<void>();

    public constructor(private _hostElement: ElementRef) {
        super();
    }

    public isModelSet(): boolean {
        return (this.model !== null && this.model !== undefined && this.model !== '');
    }

    public hasError(): boolean {
        return (this._hostElement.nativeElement.errors !== null && this._touched);
    }

    public reset() {
        this.writeValue(null);
        this._touched = false;
    }

    public writeValue(value: any): void {
        this._value = value;
    }

    public registerOnChange(fn: (_: any) => void): void {
        this._onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this._onTouched = fn;
    }
    public registerOnBlur(fn: () => void): void {
        this._onBlur = fn;
    }

    public onFocus(): void {
        this.hasFocus = true;
        this.focus.emit();
    }

    public onBlur(): void {
        if (this.validateOnBlur || this.validateOnChangeAndBlur) {
            this._onChange(this._value);
        }
        this.hasFocus = false;
        this.setTouchedIfNot();
        this._onBlur();
        this.blur.emit(null);
    }

    public setFocus() {
        setTimeout(() => {
            this._inputs.first.nativeElement.focus();
       }, 100);
    }

    public onOpenTooltip(): void {
        this.showTooltip = true;
    }

    public onCloseTooltip(): void {
        this.showTooltip = false;
    }

    public onIconClick() {
        this.iconClick.emit();
    }

    private _onChange = (_: any) => void 0;
    private _onTouched = () => void 0;
    private _onBlur = () => void 0;

    private setTouchedIfNot(): void {
        if (!this._touched) {
            this._touched = true;
            this._onTouched();
        }
    }

}
