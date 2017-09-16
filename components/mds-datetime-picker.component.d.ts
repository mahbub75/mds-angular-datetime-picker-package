import { OnInit, EventEmitter, AfterViewInit, ElementRef } from '@angular/core';
import { TextBoxTypeEnum, TemplateTypeEnum } from "../assests/enums";
import { IDate, IRangeDate } from "../assests/interfaces";
import { IEventModel } from '../index';
export declare class MdsDatetimePickerComponent implements OnInit, AfterViewInit {
    private element;
    constructor(element: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private mdsDateTimePickerCore;
    templateType: TemplateTypeEnum;
    textBoxType: TextBoxTypeEnum;
    initialValue: string;
    inLine: boolean;
    persianChar: boolean;
    rangeSelector: boolean;
    isPersian: boolean;
    timePicker: boolean;
    placeHolder: string;
    buttonIcon: string;
    format: string;
    dateChanged: EventEmitter<IDate>;
    rangeDateChanged: EventEmitter<IRangeDate>;
    textBoxKeyDown: EventEmitter<IEventModel>;
    textBoxBlur: EventEmitter<IEventModel>;
    textBoxFocus: EventEmitter<IEventModel>;
    textBoxChange: EventEmitter<IEventModel>;
    textboxValue: string;
    private topOffset;
    private leftOffset;
    private afterViewInit;
    private inClearFunction;
    private showingDateTimePickerLocked;
    private showDatePicker;
    private _selectedDateTime;
    selectedDateTime: Date;
    private _selectedDateTimeRanges;
    selectedDateTimeRanges: Date[];
    private getEventObject(event);
    private showDatePickerButtonClicked();
    private dateChangedHandler(date);
    private rangeDateChangedHandler(rangeDate);
    private dateTimeTextBoxOnFocusHandler(event);
    private dateTimeTextBoxOnBlurHandler(event);
    private dateTimeTextBoxOnKeyDownHandler(event);
    clear(): void;
    setDateTime(dateTime: Date): void;
    setDateTimeRanges(startDateTime: Date, endDateTime: Date): void;
    showDateTimePicker(): void;
    hideDateTimePicker(): void;
}
