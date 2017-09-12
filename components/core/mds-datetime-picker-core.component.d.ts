import { OnInit, EventEmitter } from '@angular/core';
import { MdsDatetimePickerResourcesService } from '../../services/mds-datetime-picker-resources.service';
import { TemplateTypeEnum } from "../../assests/enums";
import { IDate, IRangeDate } from "../../assests/interfaces";
export declare class MdsDatetimePickerCoreComponent implements OnInit {
    private resourcesService;
    constructor(resourcesService: MdsDatetimePickerResourcesService);
    ngOnInit(): void;
    templateType: TemplateTypeEnum;
    initialValue: string;
    persianChar: boolean;
    private _persianChar;
    isPersian: boolean;
    private _isPersian;
    rangeSelector: boolean;
    timePicker: boolean;
    format: string;
    dateChanged: EventEmitter<IDate>;
    rangeDateChanged: EventEmitter<IRangeDate>;
    private daysAnimationStateName;
    private monthOrYearSelectorVisibilityStateName;
    private monthSelectorVisibilityStateName;
    private yearSelectorVisibilityStateName;
    private showMonthSelectorBlock;
    private showYearsSelectorBlock;
    private splitStartEndDateString(dateString);
    private setSelectedRangeDateTimes(dateTimes);
    private setSelectedRangePersianDateTimes(persianDateTimes);
    private readonly persianStartDayOfMonth;
    private readonly gregorianStartDayOfMonth;
    private clearTime(dateTime);
    private getDateTimeFormat();
    setDateTimeByDate(dateTime: Date): void;
    setDateTimeRangesByDate(startDateTime: Date, endDateTime: Date): void;
    setDateTimeByString(dateTimeString: string): void;
    clearDateTimePicker(): void;
    readonly getSelectedDate: IDate | IRangeDate;
    private _dateTime;
    private dateTime;
    private _persianDateTime;
    private readonly persianDateTime;
    private _selectedDateTime;
    private selectedDateTime;
    private _selectedPersianDateTime;
    private readonly selectedPersianDateTime;
    private _selectedStartDateTime;
    private selectedStartDateTime;
    private _selectedPersianStartDateTime;
    private readonly selectedPersianStartDateTime;
    private _selectedEndDateTime;
    private selectedEndDateTime;
    private _selectedPersianEndDateTime;
    private readonly selectedPersianEndDateTime;
    private startMdsPersianDateTimeToDateTemp;
    private endMdsPersianDateTimeToDateTemp;
    private yearsToSelect;
    private daysInMonth;
    private weekDayNames;
    private _resources;
    private readonly resources;
    private _year;
    readonly year: number;
    private _yearString;
    private readonly yearString;
    private _month;
    private readonly month;
    private _monthName;
    private readonly monthName;
    private _monthNames;
    private readonly monthNames;
    private _hour;
    private readonly hour;
    private _hourString;
    private readonly hourString;
    private _minute;
    private readonly minute;
    private _minuteString;
    private readonly minuteString;
    private _second;
    private readonly second;
    private _secondString;
    private readonly secondString;
    private _weekdayNames;
    private readonly weekdayNames;
    private _iDate;
    private readonly getSelectedDateObject;
    private readonly getSelectedDay;
    private _selectedRangeDatesObject;
    private readonly getSelectedRangeDatesObject;
    private readonly isRejectButtonDisable;
    private readonly isConfirmButtonDisable;
    private updateYearsList();
    private getDayObject(year, month, day, disabled, holiday, isToday);
    private readonly isRangeSelectorReady;
    private updateMonthDays();
    private fireChangeEvent();
    private fireRangeChangeEvent();
    private resetToFalseRangeParametersInMonthDays();
    private resetMonthDaysWithContent();
    hideSelecMonthAndYearBlock(): void;
    resetIncompleteRanges(): void;
    private monthButtonOnClick();
    private selectYearButtonOnClick();
    private monthsBlockVisibilityAnimationDone();
    private yearsBlockVisibilityAnimationDone();
    private nextYearButtonOnClick();
    private nextMonthButtonOnClick();
    private previousMonthButtonOnClick();
    private previousYearButtonOnClick();
    private hourUpButtonOnClick();
    private hourDownButtonOnClick();
    private minuteUpButtonOnClick();
    private minuteDownButtonOnClick();
    private secondUpButtonOnClick();
    private secondDownButtonOnClick();
    private monthOnClick(selectedMonthName);
    private yearOnClick(selectedYear);
    private todayButtonOnClick();
    private dayButtonOnClick(dayObject);
    private dayButtonOnHover(dayObject);
    private rejectButtonOnClick();
    private confirmButtonOnClick();
}
