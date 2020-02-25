/*
 * JTSage-DateBox-5.1.5 (jqm)
 * For: {"bootstrap-v4":"4.3.1","bootstrap-v3":"3.4.1","zurb-foundation":"6.5.3","bulma":"0.7.4","jquery-mobile":"1.4.5","fomantic-ui":"2.7.2","uikit":"3.0.3","noframe":"0.0.1"}
 * Date: 2019-07-15T16:49:28.699Z
 * http://datebox.jtsage.dev/
 * https://github.com/jtsage/jtsage-datebox
 *
 * Copyright 2010, 2019 JTSage. and other contributors
 * Released under the MIT license.
 * https://github.com/jtsage/jtsage-datebox/blob/master/LICENSE.txt
 *
 */


if (typeof Object.assign != "function") {
    Object.defineProperty(Object, "assign", {
        value: function assign(target, varArgs) {
            "use strict";
            if (target == null) {
                throw new TypeError("Cannot convert undefined or null to object");
            }
            var to = Object(target);
            for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];
                if (nextSource != null) {
                    for (var nextKey in nextSource) {
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
            return to;
        },
        writable: true,
        configurable: true
    });
}

(function($) {
    $.widget("jtsage.datebox", {
        initSelector: "input[data-role='datebox']",
        options: {
            mode: false,
            hideInput: false,
            lockInput: true,
            safeEdit: true,
            controlWidth: "290px",
            controlWidthImp: "",
            breakpointWidth: "567px",
            zindex: "1100",
            clickEvent: "vclick",
            disableWheel: false,
            useKinetic: true,
            flipSizeOverride: false,
            defaultValue: false,
            showInitialValue: false,
            linkedField: false,
            linkedFieldFormat: "%J",
            displayMode: "dropdown",
            displayDropdownPosition: "bottomRight",
            displayInlinePosition: "center",
            displayForcePosition: false,
            dismissOutsideClick: true,
            dismissOnEscape: false,
            useHeader: true,
            useImmediate: false,
            useButton: true,
            buttonIcon: false,
            useFocus: false,
            useSetButton: true,
            useCancelButton: false,
            useTodayButton: false,
            closeTodayButton: false,
            useTomorrowButton: false,
            closeTomorrowButton: false,
            useClearButton: false,
            useCollapsedBut: false,
            usePlaceholder: false,
            beforeOpenCallback: false,
            beforeOpenCallbackArgs: [],
            openCallback: false,
            openCallbackArgs: [],
            closeCallback: false,
            closeCallbackArgs: [],
            runOnBlurCallback: false,
            startOffsetYears: false,
            startOffsetMonths: false,
            startOffsetDays: false,
            afterToday: false,
            beforeToday: false,
            notToday: false,
            maxDate: false,
            minDate: false,
            maxDays: false,
            minDays: false,
            maxYear: false,
            minYear: false,
            blackDates: false,
            blackDatesRec: false,
            blackDays: false,
            whiteDates: false,
            enableDates: false,
            validHours: false,
            minHour: false,
            maxHour: false,
            minTime: false,
            maxTime: false,
            maxDur: false,
            minDur: false,
            minuteStep: 1,
            minuteStepRound: 0,
            twoDigitYearCutoff: 38,
            flipboxLensAdjust: false,
            rolloverMode: {
                m: true,
                d: true,
                h: true,
                i: true,
                s: true
            },
            useLang: "default",
            lang: {
                default: {
                    setDateButtonLabel: "Set Date",
                    setTimeButtonLabel: "Set Time",
                    setDurationButtonLabel: "Set Duration",
                    todayButtonLabel: "Jump to Today",
                    tomorrowButtonLabel: "Jump to Tomorrow",
                    titleDateDialogLabel: "Set Date",
                    titleTimeDialogLabel: "Set Time",
                    daysOfWeek: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
                    daysOfWeekShort: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ],
                    monthsOfYear: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                    monthsOfYearShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
                    durationLabel: [ "Days", "Hours", "Minutes", "Seconds" ],
                    durationDays: [ "Day", "Days" ],
                    timeFormat: 24,
                    headerFormat: "%A, %B %-d, %Y",
                    tooltip: "Open Date Picker",
                    nextMonth: "Next Month",
                    prevMonth: "Previous Month",
                    dateFieldOrder: [ "m", "d", "y" ],
                    timeFieldOrder: [ "h", "i", "a" ],
                    datetimeFieldOrder: [ "y", "m", "d", "h", "i", "s", "a" ],
                    slideFieldOrder: [ "y", "m", "d" ],
                    dateFormat: "%Y-%m-%d",
                    datetimeFormat: "%Y-%m-%dT%k:%M:%S",
                    useArabicIndic: false,
                    isRTL: false,
                    calStartDay: 0,
                    clearButton: "Clear",
                    cancelButton: "Cancel",
                    durationOrder: [ "d", "h", "i", "s" ],
                    meridiem: [ "AM", "PM" ],
                    timeOutput: "%k:%M",
                    durationFormat: "%Dd %DA, %Dl:%DM:%DS",
                    calDateListLabel: "Other Dates",
                    calHeaderFormat: "%B %Y"
                }
            },
            theme_clearBtn: [ "recycle", "a" ],
            theme_closeBtn: [ "check", "a" ],
            theme_cancelBtn: [ "delete", "a" ],
            theme_tomorrowBtn: [ "action", "a" ],
            theme_todayBtn: [ "action", "a" ],
            theme_dropdownContainer: "ui-body-a",
            theme_modalContainer: "ui-body-a",
            theme_inlineContainer: "ui-body-a",
            theme_headerTheme: "inherit",
            theme_headerBtn: [ "delete", "a" ],
            theme_openButton: false,
            theme_cal_Today: "b",
            theme_cal_DayHigh: "b",
            theme_cal_Selected: "active",
            theme_cal_DateHigh: "b",
            theme_cal_DateHighAlt: "b",
            theme_cal_DateHighRec: "b",
            theme_cal_Default: "a",
            theme_cal_OutOfBounds: "a",
            theme_cal_NextBtn: [ "plus", "a" ],
            theme_cal_PrevBtn: [ "minus", "a" ],
            theme_cal_Pickers: "a",
            theme_cal_DateList: "a",
            theme_dbox_NextBtn: [ "plus", "a" ],
            theme_dbox_PrevBtn: [ "minus", "a" ],
            theme_dbox_Inputs: "inherit",
            theme_fbox_Selected: "a ui-flipswitch-active",
            theme_fbox_Default: "a",
            theme_fbox_Forbidden: "a ui-disabled",
            theme_fbox_RollHeight: "135px",
            theme_slide_Today: "b",
            theme_slide_DayHigh: "b",
            theme_slide_Selected: "active",
            theme_slide_DateHigh: "b",
            theme_slide_DateHighAlt: "b",
            theme_slide_DateHighRec: "b",
            theme_slide_Default: "a",
            theme_slide_NextBtn: [ "plus", "a" ],
            theme_slide_PrevBtn: [ "minus", "a" ],
            theme_slide_NextDateBtn: [ "carat-r", "a" ],
            theme_slide_PrevDateBtn: [ "carat-l", "a" ],
            theme_slide_Pickers: "a",
            theme_slide_DateList: "a",
            theme_backgroundMask: {
                position: "fixed",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,.4)"
            },
            theme_headStyle: " .center { text-align: center !important; } .p0 { padding: 0 !important; }.m0 { margin: 0 !important; } .w-100 { width: 100% !important; }",
            theme_spanStyle: false,
            buttonIconDate: "calendar",
            buttonIconTime: "clock",
            disabledState: "ui-disabled",
            tranDone: "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            calHighToday: true,
            calHighPick: true,
            calHighOutOfBounds: true,
            calSelectedOutOfBounds: true,
            calShowDays: true,
            calOnlyMonth: false,
            calShowWeek: false,
            calUsePickers: false,
            calNoHeader: false,
            calYearPickMin: -6,
            calYearPickMax: 6,
            calYearPickRelative: true,
            calFormatter: false,
            calBeforeAppendFunc: function(t) {
                return t;
            },
            highDays: false,
            highDates: false,
            highDatesRec: false,
            highDatesAlt: false,
            calDateList: false,
            calShowDateList: false,
            durationStep: 1,
            durationSteppers: {
                d: 1,
                h: 1,
                i: 1,
                s: 1
            },
            flen: {
                y: 25,
                m: 24,
                d: 40,
                h: 24,
                i: 30,
                s: 30,
                a: 30
            },
            fboxNatural: "default",
            slideHighToday: true,
            slideHighPick: true,
            slideUsePickers: false,
            slideNoHeader: false,
            slideYearPickMin: -6,
            slideYearPickMax: 6,
            slideYearPickRelative: true,
            slideDateList: false,
            slideShowDateList: false
        },
        icons: {
            getIcon: function(name) {
                var w = this, icnF = w.options.iconFactory;
                if (name === false) {
                    return false;
                }
                if (typeof icnF === "function") {
                    return icnF.call(w, name);
                }
                if (name.substr(0, 4) === "<svg") {
                    return name;
                }
                if (typeof w.icons[name] !== "undefined") {
                    return w.icons[name];
                }
                return w.icons.cancel;
            },
            next: '<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M9.8 6L4 11.8l-1.8-1.7L6.6 6 2.2 2 4 .1 9.8 6z" clip-rule="evenodd" fill-rule="evenodd"/></svg>',
            prev: '<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M2.2 6L8 .2l1.8 1.7L5.4 6l4.4 4L8 11.9 2.2 6z" clip-rule="evenodd" fill-rule="evenodd"/></svg>',
            plus: '<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5v2h12V5H0z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 0H5v12h2V0z" fill="currentColor"/></svg>',
            minus: '<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M0 5v2h12V5H0z" clip-rule="evenodd" fill-rule="evenodd"/></svg>',
            check: '<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 2.8l-8 8-4-4 1.5-1.5L4 7.8l6.5-6.5L12 2.6z" clip-rule="evenodd" fill-rule="evenodd"/></svg>',
            cancel: '<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M11 2.5L9.4 1 1.1 9.5 2.5 11l8.4-8.4z" clip-rule="evenodd" fill-rule="evenodd"/><path fill="currentColor" d="M2.5 1L1 2.6l8.4 8.4L11 9.5 2.5 1.1z" clip-rule="evenodd" fill-rule="evenodd"/></svg>',
            goto: '<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M7 3.3C3.8 3.6.4 5.9.4 11.7c2-4.3 4-5 6.8-5v2.9l4.6-4.7L7.1.3v3z" fill-rule="evenodd"/></svg>',
            clear: '<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.8 1H8.1c0-.5-.4-1-.8-1H4.7C4.3 0 4 .6 4 1H2.2c-.4 0-.8.3-.8.8v.8c0 .5.4.8.8.8V11c0 .5.4.9.9.9H9c.4 0 .8-.4.8-.9V3.4c.5 0 .8-.3.8-.8v-.8c0-.5-.3-.9-.8-.9zM9 11H3V3.6H4v6.7h.8V3.5h.9v6.7h.8V3.5h.9v6.7H8V3.5h.8V11zm.8-8.4H2.2v-.8h7.6v.8z" fill="currentColor"/></svg>',
            clock: '<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M6.8 6h2.5v1.7H5.9a.8.8 0 0 1-.8-.8V2.6h1.7V6zM6 1.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6zM6 .1a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6z" clip-rule="evenodd" fill-rule="evenodd"/></svg>',
            calendar: '<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M10.5 1h-.8v1.3c0 .2-.2.4-.4.4H7.6a.4.4 0 0 1-.4-.4V1H4.7v1.3c0 .2-.2.4-.4.4H2.6a.4.4 0 0 1-.4-.4V1h-.8c-.5 0-.8.4-.8.8V11c0 .5.4.8.8.8h9.3c.5 0 .8-.4.8-.8V1.8c0-.5-.4-.8-.8-.8zm0 10.1H1.2V3.5h9.3v7.6zM3.7 1.9h-.8V.2h.8v1.7zm5.1 0H8V.2h.8v1.7zM4.5 5.3h-.8v-.8h.8v.8zm1.7 0h-.8v-.8h.8v.8zm1.7 0h-.8v-.8h.8v.8zm1.7 0h-.8v-.8h.8v.8zM2.8 7H2v-.8h.8V7zm1.7 0h-.8v-.8h.8V7zm1.7 0h-.8v-.8h.8V7zm1.7 0h-.8v-.8h.8V7zm1.7 0h-.8v-.8h.8V7zM2.8 8.7H2v-.8h.8v.8zm1.7 0h-.8v-.8h.8v.8zm1.7 0h-.8v-.8h.8v.8zm1.7 0h-.8v-.8h.8v.8zm1.7 0h-.8v-.8h.8v.8zm-6.8 1.7H2v-.8h.8v.8zm1.7 0h-.8v-.8h.8v.8zm1.7 0h-.8v-.8h.8v.8zm1.7 0h-.8v-.8h.8v.8z"/></svg>'
        },
        styleFunctions: {},
        _getLongOptions: function(element) {
            var key, temp, returnObj = {}, prefix = "datebox", prefixLength = 7;
            for (key in element.data()) {
                if (key.substr(0, prefixLength) === prefix && key.length > prefixLength) {
                    temp = key.substr(prefixLength);
                    temp = temp.charAt(0).toLowerCase() + temp.slice(1);
                    if (temp !== "options") {
                        returnObj[temp] = element.data(key);
                    }
                }
            }
            return returnObj;
        },
        _setOption: function() {
            $.Widget.prototype._setOption.apply(this, arguments);
            this.refresh();
        },
        getOption: function(opt) {
            var i18nTester = this.__(opt);
            if (i18nTester !== "Err:NotFound") {
                return i18nTester;
            } else {
                return this.options[opt];
            }
        },
        style_attach: function(isInline) {
            var w = this, possibleAttach = w.d.wrap.parent(), hardAttachPoint = $("body").find("#" + w.baseID + "-dbAttach");
            if (hardAttachPoint.length === 1) {
                return hardAttachPoint;
            }
            if (!isInline) {
                possibleAttach = $(".ui-page-active");
                if (possibleAttach.length === 1) {
                    return possibleAttach;
                }
                possibleAttach = w.d.input.closest("[data-role='page']");
                if (possibleAttach.length === 1) {
                    return possibleAttach;
                }
                return $("body");
            }
            if (possibleAttach.hasClass("ui-field-contain")) {
                return possibleAttach;
            } else {
                return w.d.wrap;
            }
        },
        style_btn: function(theme, contents) {
            var retty;
            contents = typeof contents === "undefined" ? "" : contents;
            retty = "<a href='#' role='button' class='ui-btn ui-mini ui-btn-" + theme[1] + "";
            retty += theme[0] !== false ? " ui-icon-" + theme[0] : "";
            retty += contents === "" ? " ui-corner-all ui-btn-icon-notext" : " ui-btn-icon-left";
            retty += "'>" + contents + "</a>";
            return retty;
        },
        style_btnGrp: function(collapse) {
            var style = collapse ? "margin: 0 auto;" : "margin: 0 .446em";
            return $("<div style='" + style + "' class='ui-controlgroup-controls'>");
        },
        style_btnGrpOut: function(collapse, inner) {
            var cls = collapse === true ? "ui-controlgroup-horizontal" : "ui-controlgroup-vertical", style = collapse === true ? "style='text-align:center'" : "";
            inner.find(".ui-btn").last().addClass("ui-last-child");
            inner.find(".ui-btn").first().addClass("ui-first-child");
            return $("<div " + style + " class='ui-controlgroup " + cls + "'>").append(inner);
        },
        style_inWrap: function(originalInput) {
            originalInput.parent().enhanceWithin();
            return originalInput.parent().addClass("ui-input-has-clear");
        },
        style_inBtn: function(icon, title) {
            return "<a href='javascript: return false;' " + "class='dbOpenButton ui-input-clear ui-btn ui-icon-" + icon + " ui-btn-icon-notext ui-corner-all' " + "title='" + title + "'>" + title + "</a>";
        },
        style_inNoBtn: function(originalInputWrap) {
            originalInputWrap.parent().removeClass("ui-has-clear");
        },
        style_inHide: function() {
            var w = this, hideMe = w.d.wrap.parent();
            if (hideMe.hasClass("ui-field-contain")) {
                hideMe.hide();
            } else {
                w.d.wrap.hide();
            }
        },
        style_mainHead: function(text, themeBar, themeButton) {
            return "<div class='ui-header ui-bar-" + themeBar + "'>" + "<h1 class='ui-title'>" + text + "</h1>" + this.style_btn([ themeButton[0], themeButton[1] + " dbCloser ui-btn-right" ]) + "</div>";
        },
        style_subHead: function(text) {
            return $("<div class='dbHeader'>" + "<h3 class='center'>" + text + "</h3>" + "</div>");
        },
        style_pnHead: function(txt, prevBtn, nextBtn, prevCtl, nextCtl) {
            var returnVal = $("<div class='ui-header' style='border:0; padding: 0 3px 8px;'>");
            $(this.style_btn([ prevBtn[0], prevBtn[1] + " ui-btn-left " + prevCtl ])).appendTo(returnVal);
            $("<h3 class='ui-title' style='margin: 0 15%'>" + txt + "</h3>").appendTo(returnVal);
            $(this.style_btn([ nextBtn[0], nextBtn[1] + " ui-btn-right " + nextCtl ])).appendTo(returnVal);
            return returnVal;
        },
        style_picker: function(ranges, theme, monthCtl, yearCtl) {
            var i = 0, returnVal = "<div style='padding-bottom: 8px' class='" + "ui-controlgroup ui-controlgroup-horizontal ui-corner-all ui-mini'>";
            returnVal += "<div class='ui-controlgroup-controls w-100'>";
            returnVal += "<div class='ui-select' style='width:60%'>";
            returnVal += "<div id='" + monthCtl + "-button' class='ui-btn-" + theme + " ui-btn ui-icon-carat-d ui-btn-icon-right ui-corner-all ui-shadow ui-first-child'>";
            for (i = 0; i < ranges.month.length; i++) {
                if (ranges.month[i][2] === true) {
                    returnVal += "<span>" + ranges.month[i][1] + "</span>";
                }
            }
            returnVal += this._stdSel(ranges.month, monthCtl, "");
            returnVal += "</div></div>";
            returnVal += "<div class='ui-select' style='width:40%'>";
            returnVal += "<div id='" + yearCtl + "-button' class='ui-btn-" + theme + " ui-btn ui-icon-carat-d ui-btn-icon-right ui-corner-all ui-shadow ui-last-child'>";
            for (i = 0; i < ranges.year.length; i++) {
                if (ranges.year[i][2] === true) {
                    returnVal += "<span>" + ranges.year[i][1] + "</span>";
                }
            }
            returnVal += this._stdSel(ranges.year, yearCtl, "");
            returnVal += "</div></div>";
            returnVal += "</div></div>";
            return $(returnVal);
        },
        style_dateList: function(listLabel, list, theme, ctlCls) {
            var returnVal = "", newList = list.slice();
            newList.unshift([ false, listLabel, true ]);
            returnVal += "<div class='ui-select'>";
            returnVal += "<div id='" + ctlCls + "-button' style='margin: 0 .446em 8px;' class='" + "ui-mini ui-btn ui-icon-carat-d ui-btn-" + theme + " ui-btn-icon-right ui-corner-all'>";
            returnVal += "<span>" + listLabel + "</span>";
            returnVal += this._stdSel(newList, ctlCls, "");
            returnVal += "</div></div>";
            return $(returnVal);
        },
        style_calGrid: function() {
            return $("<div><table class='dbCalGrid w-100'></table></div>");
        },
        style_calRow: function() {
            return $("<tr>");
        },
        style_calBtn: function(data, totalElements) {
            var styles_TD = "width:" + 100 / totalElements + "%", styles_A = [ "padding-right:0", "padding-left:0" ], class_A = [ "dbEvent", "ui-btn", "ui-mini", "m0", "ui-btn-" + data.theme, data.bad ? "ui-disabled" : "" ], disable = data.bad ? "disabled='disabled'" : "";
            return $("<td class='p0 m0' style='" + styles_TD + "'>" + "<a style='" + styles_A.join(";") + "' class='" + class_A.join(" ") + "' href='#' " + disable + ">" + data.displayText + "</a></td>");
        },
        style_calTxt: function(text, header, totalElements) {
            var styles = [ "width:" + 100 / totalElements + "%", header ? "font-weight:bold" : "" ];
            return $("<td class='p0 m0 center' style='" + styles.join(";") + "'>" + text + "</td>");
        },
        style_dboxCtr: function() {
            return $("<table class='w-100'>");
        },
        style_dboxRow: function() {
            return $("<tr>");
        },
        style_dboxCtrl: function(prevBtn, nextBtn, mainCls, label, inTheme) {
            var returnVal = "";
            returnVal += "<td class='dbBox" + mainCls + "'>";
            returnVal += "<a href='#' role='button' class='ui-corner-all ui-btn ui-mini ui-btn-";
            returnVal += nextBtn[1] + " ui-icon-" + nextBtn[0] + " ui-btn-icon-top dbBoxNext m0' ";
            returnVal += "style='padding-top:2.1em; border-bottom-left-radius:0;" + "border-bottom-right-radius:0;'>";
            returnVal += "</a>";
            if (label !== null) {
                returnVal += "<div class='m0 center ui-input-text ui-body-inherit' " + "style='height:auto; padding: .3em 0;'>" + label + "</div>";
            }
            returnVal += "<div class='m0 ui-input-text ui-mini ui-body-" + inTheme + "'>";
            returnVal += "<input class='p0 center' type='text'></div>";
            returnVal += "<a href='#' role='button' class='ui-corner-all ui-btn ui-mini ui-btn-";
            returnVal += prevBtn[1] + " ui-icon-" + prevBtn[0] + " ui-btn-icon-top dbBoxPrev m0' ";
            returnVal += "style='padding-top:2.1em; border-top-left-radius:0;" + "border-top-right-radius:0;'>";
            returnVal += "</a>";
            returnVal += "</div>";
            return $(returnVal);
        },
        style_slideGrid: function() {
            return $("<div><table class='dbSlideGrid w-100'></table></div>");
        },
        style_slideRow: function() {
            return $("<tr>");
        },
        style_slideBtn: function(data) {
            var style = " style='width: " + 100 / 8 + "%'", disable = data.bad ? "disabled='disabled'" : "", cls = "class='m0 dbEventS w-100 ui-btn ui-mini ui-btn-" + data.theme + (data.bad ? " disabled" : "") + "'";
            return $("<td class='m-0 p-0 text-center'" + style + ">" + "<a style='padding:.7em 0;' href='#' " + cls + " " + disable + ">" + "<small>" + this.__("daysOfWeekShort")[data.dateObj.getDay()] + "</small><br>" + data.dateObj.getDate() + "</a>" + "</td>");
        },
        style_slideCtrl: function(eventCls, theme) {
            var style = " style='width: " + 100 / 8 / 2 + "%'", cls = "class='m0 ui-corner-all ui-btn ui-mini ui-btn-icon-notext ui-btn-" + theme[1] + " " + eventCls + " ui-icon-" + theme[0] + "'";
            return $("<td " + style + ">" + "<a href='#' " + cls + "></a></td>");
        },
        style_fboxCtr: function(size) {
            return $("<div style='margin: 0 5px 8px; height: " + size + "; overflow: hidden'>");
        },
        style_fboxDurLbls: function() {
            return $("<div style='margin: 5px;'>");
        },
        style_fboxDurLbl: function(text, items) {
            return $("<div class='center' " + "style='display:inline-block; width: " + 100 / items + "%'>" + text + "</div>");
        },
        style_fboxRollCtr: function(total) {
            return $("<div style='float:left; width:" + 100 / total + "%'>");
        },
        style_fboxRollPrt: function() {
            return $("<ul style='list-style-type: none; display: inline;'>");
        },
        style_fboxRollCld: function(text, cls) {
            return $("<li style='height: 30px; line-height: 30px;' class='center ui-body-" + cls + "'>" + text + "</li>");
        },
        style_fboxLens: function() {
            return $("<div style='width: 96%; height: 40px; border: 1px solid #eee; margin: 0 1.5%;' " + "class='ui-overlay-shadow'>");
        },
        style_fboxPos: function() {
            var fullRoller, firstItem, height_Roller, intended_Top, w = this, o = this.options, height_Outside = w.d.intHTML.find(".dbRollerV").outerHeight(), theLens = w.d.intHTML.find(".dbLens").first(), height_Lens = theLens.outerHeight();
            intended_Top = -1 * (height_Outside / 2 + height_Lens / 2);
            theLens.css({
                top: intended_Top + -3,
                marginBottom: -1 * height_Lens
            });
            w.d.intHTML.find(".dbRoller").each(function() {
                fullRoller = $(this);
                firstItem = fullRoller.children().first();
                if (firstItem.css("marginTop") === "0px") {
                    height_Roller = (fullRoller.children().length + 1) * firstItem.outerHeight();
                    intended_Top = -1 * (height_Roller / 2) + height_Outside / 2;
                    if (o.flipboxLensAdjust !== false) {
                        intended_Top += o.flipboxLensAdjust;
                    }
                    firstItem.css("margin-top", intended_Top);
                }
            });
        },
        _enhanceDate: function() {
            Object.assign(this._date.prototype, {
                copy: function(adjust, override) {
                    adjust = Object.assign([ 0, 0, 0, 0, 0, 0, 0 ], adjust);
                    override = Object.assign([ 0, 0, 0, 0, 0, 0, 0 ], override);
                    return new Date(override[0] > 0 ? override[0] : this.get(0) + adjust[0], override[1] > 0 ? override[1] : this.get(1) + adjust[1], override[2] > 0 ? override[2] : this.get(2) + adjust[2], override[3] > 0 ? override[3] : this.get(3) + adjust[3], override[4] > 0 ? override[4] : this.get(4) + adjust[4], override[5] > 0 ? override[5] : this.get(5) + adjust[5], override[6] > 0 ? override[5] : this.get(6) + adjust[6]);
                },
                adj: function(type, amount) {
                    if (typeof amount !== "number" || typeof type !== "number") {
                        throw new Error("Invalid Arguments");
                    }
                    switch (type) {
                      case 0:
                        this.setD(0, this.get(0) + amount);
                        break;

                      case 1:
                        this.setD(1, this.get(1) + amount);
                        break;

                      case 2:
                        this.setD(2, this.get(2) + amount);
                        break;

                      case 3:
                        amount *= 60;

                      case 4:
                        amount *= 60;

                      case 5:
                        amount *= 1e3;

                      case 6:
                        this.setTime(this.getTime() + amount);
                        break;
                    }
                    return this;
                },
                setD: function(type, amount) {
                    switch (type) {
                      case 0:
                        this.setFullYear(amount);
                        break;

                      case 1:
                        this.setMonth(amount);
                        break;

                      case 2:
                        this.setDate(amount);
                        break;

                      case 3:
                        this.setHours(amount);
                        break;

                      case 4:
                        this.setMinutes(amount);
                        break;

                      case 5:
                        this.setSeconds(amount);
                        break;

                      case 6:
                        this.setMilliseconds(amount);
                        break;
                    }
                    return this;
                },
                get: function(type) {
                    switch (type) {
                      case 0:
                        return this.getFullYear();

                      case 1:
                        return this.getMonth();

                      case 2:
                        return this.getDate();

                      case 3:
                        return this.getHours();

                      case 4:
                        return this.getMinutes();

                      case 5:
                        return this.getSeconds();

                      case 6:
                        return this.getMilliseconds();
                    }
                    return false;
                },
                get12hr: function() {
                    if (this.get(3) === 0) {
                        return 12;
                    }
                    if (this.get(3) < 13) {
                        return this.get(3);
                    }
                    return this.get(3) - 12;
                },
                iso: function() {
                    var arr = [ 0, 0, 0 ], i = 0;
                    for (i = 0; i < 3; i++) {
                        arr[i] = this.get(i);
                        if (i === 1) {
                            arr[i]++;
                        }
                        if (arr[i] < 10) {
                            arr[i] = "0" + String(arr[i]);
                        }
                    }
                    return arr.join("-");
                },
                comp: function() {
                    return parseInt(this.iso().replace(/-/g, ""), 10);
                },
                getEpoch: function() {
                    return Math.floor(this.getTime() / 1e3);
                },
                getEpochDays: function() {
                    return Math.floor(this.getTime() / (1e3 * 60 * 60 * 24));
                },
                getArray: function() {
                    var arr = [ 0, 0, 0, 0, 0, 0 ], i = 0;
                    for (i = 0; i < 6; i++) {
                        arr[i] = this.get(i);
                    }
                    return arr;
                },
                setFirstDay: function(day) {
                    this.setD(2, 1).adj(2, day - this.getDay());
                    if (this.get(2) > 10) {
                        this.adj(2, 7);
                    }
                    return this;
                },
                setDWeek: function(type, num) {
                    if (type === 4) {
                        return this.setD(1, 0).setD(2, 1).setFirstDay(4).adj(2, -3).adj(2, (num - 1) * 7);
                    }
                    return this.setD(1, 0).setD(2, 1).setFirstDay(type).adj(2, (num - 1) * 7);
                },
                getDWeek: function(type) {
                    var t1, t2;
                    switch (type) {
                      case 0:
                        t1 = this.copy([ 0, -1 * this.getMonth() ]).setFirstDay(0);
                        return Math.floor((this.getTime() - (t1.getTime() + (this.getTimezoneOffset() - t1.getTimezoneOffset()) * 6e4)) / 6048e5) + 1;

                      case 1:
                        t1 = this.copy([ 0, -1 * this.getMonth() ]).setFirstDay(1);
                        return Math.floor((this.getTime() - (t1.getTime() + (this.getTimezoneOffset() - t1.getTimezoneOffset()) * 6e4)) / 6048e5) + 1;

                      case 4:
                        if (this.getMonth() === 11 && this.getDate() > 28) {
                            return 1;
                        }
                        t1 = this.copy([ 0, -1 * this.getMonth() ], true).setFirstDay(4).adj(2, -3);
                        t2 = Math.floor((this.getTime() - (t1.getTime() + (this.getTimezoneOffset() - t1.getTimezoneOffset()) * 6e4)) / 6048e5) + 1;
                        if (t2 < 1) {
                            t1 = this.copy([ -1, -1 * this.getMonth() ]).setFirstDay(4).adj(2, -3);
                            return Math.floor((this.getTime() - t1.getTime()) / 6048e5) + 1;
                        }
                        return t2;

                      default:
                        return 0;
                    }
                }
            });
        },
        _ord: {
            default: function(num) {
                var ending = num % 10;
                if (num > 9 && num < 21 || ending > 3) {
                    return "th";
                }
                return [ "th", "st", "nd", "rd" ][ending];
            }
        },
        _customformat: {
            default: function(oper, date, o) {
                return false;
            }
        },
        _formatter: function(format, date, allowArIn) {
            var w = this, o = this.options, tmp, dur = 0;
            if (typeof allowArIn === "undefined") {
                allowArIn = true;
            }
            if (o.mode.substr(0, 4) === "dura") {
                dur = w._dur(this.theDate.getTime() - this.initDate.getTime());
                if (!format.match(/%Dd/)) {
                    dur[1] += dur[0] * 24;
                }
                if (!format.match(/%Dl/)) {
                    dur[2] += dur[1] * 60;
                }
                if (!format.match(/%DM/)) {
                    dur[3] += dur[2] * 60;
                }
            }
            format = format.replace(/%(D|X|0|-)*([1-9a-zA-Z])/g, function(match, pad, oper) {
                if (pad === "X") {
                    if (typeof w._customformat[o.mode] === "function") {
                        return w._customformat[o.mode](oper, date, o);
                    }
                    return match;
                }
                if (pad === "D") {
                    switch (oper) {
                      case "d":
                        return dur[0];

                      case "l":
                        return w._zPad(dur[1]);

                      case "M":
                        return w._zPad(dur[2]);

                      case "S":
                        return w._zPad(dur[3]);

                      case "A":
                        return w.__("durationDays")[dur[0] === 1 ? 0 : 1];

                      default:
                        return match;
                    }
                }
                switch (oper) {
                  case "a":
                    return w.__("daysOfWeekShort")[date.getDay()];

                  case "A":
                    return w.__("daysOfWeek")[date.getDay()];

                  case "b":
                    return w.__("monthsOfYearShort")[date.getMonth()];

                  case "B":
                    return w.__("monthsOfYear")[date.getMonth()];

                  case "C":
                    return parseInt(date.getFullYear() / 100);

                  case "d":
                    return w._zPad(date.getDate(), pad);

                  case "H":
                  case "k":
                    return w._zPad(date.getHours(), pad);

                  case "I":
                  case "l":
                    return w._zPad(date.get12hr(), pad);

                  case "m":
                    return w._zPad(date.getMonth() + 1, pad);

                  case "M":
                    return w._zPad(date.getMinutes(), pad);

                  case "p":
                  case "P":
                    tmp = w.__("meridiem")[date.get(3) < 12 ? 0 : 1].toUpperCase();
                    return oper === "P" ? tmp.toLowerCase() : tmp;

                  case "s":
                    return date.getEpoch();

                  case "S":
                    return w._zPad(date.getSeconds(), pad);

                  case "u":
                    return w._zPad(date.getDay() + 1, pad);

                  case "w":
                    return date.getDay();

                  case "y":
                    return w._zPad(date.getFullYear() % 100);

                  case "Y":
                    return date.getFullYear();

                  case "E":
                    return date.getFullYear() + 543;

                  case "V":
                    return w._zPad(date.getDWeek(4), pad);

                  case "U":
                    return w._zPad(date.getDWeek(0), pad);

                  case "W":
                    return w._zPad(date.getDWeek(1), pad);

                  case "o":
                    if (typeof w._ord[o.useLang] === "function") {
                        return w._ord[o.useLang](date.getDate());
                    }
                    return w._ord["default"](date.getDate());

                  case "j":
                    tmp = new w._date(date.getFullYear(), 0, 1);
                    tmp = "000" + String(Math.ceil((date - tmp) / 864e5) + 1);
                    return tmp.slice(-3);

                  case "J":
                    return date.toJSON();

                  case "G":
                    tmp = date.getFullYear();
                    if (date.getDWeek(4) === 1 && date.getMonth() > 0) {
                        return tmp + 1;
                    }
                    if (date.getDWeek(4) > 51 && date.getMonth() < 11) {
                        return tmp - 1;
                    }
                    return tmp;

                  case "g":
                    tmp = date.getFullYear % 100;
                    if (date.getDWeek(4) === 1 && date.getMonth() > 0) {
                        ++tmp;
                    }
                    if (date.getDWeek(4) > 51 && date.getMonth() < 11) {
                        --tmp;
                    }
                    return w._zpad(tmp);

                  default:
                    return match;
                }
            });
            if (w.__("useArabicIndic") === true && allowArIn === true) {
                format = w._dRep(format);
            }
            return format;
        },
        _minStepFix: function() {
            var newMinute = this.theDate.get(4), mstep = this.options.minuteStep, roundDirection = this.options.minStepRound, remainder = newMinute % mstep;
            if (mstep > 1 && remainder > 0) {
                if (roundDirection < 0) {
                    newMinute = newMinute - remainder;
                } else if (roundDirection > 0) {
                    newMinute = newMinute + (mstep - remainder);
                } else {
                    if (newMinute % mstep < mstep / 2) {
                        newMinute = newMinute - remainder;
                    } else {
                        newMinute = newMinute + (mstep - remainder);
                    }
                }
                this.theDate.setMinutes(newMinute);
            }
        },
        _newDateCheck: {
            enableDate: function(testDate) {
                return this.options.enableDates.indexOf(testDate.iso) > -1;
            },
            whiteDate: function(testDate) {
                if (this.options.whiteDates === false) {
                    return false;
                }
                return this.options.whiteDates.indexOf(testDate.iso) > -1;
            },
            notToday: function(testDate) {
                if (this.options.notToday === false) {
                    return false;
                }
                return this.realToday.comp() === testDate.comp();
            },
            maxYear: function(testDate) {
                var testOption = this.options.maxYear;
                if (testOption === false) {
                    return false;
                }
                return testDate.get(0) > testOption;
            },
            minYear: function(testDate) {
                var testOption = this.options.minYear;
                if (testOption === false) {
                    return false;
                }
                return testDate.get(0) < testOption;
            },
            minDate: function(testDate) {
                var testOption = this.options.minDate;
                if (testOption === false) {
                    return false;
                }
                testOption = this.parseISO(testOption);
                return testDate < testOption;
            },
            maxDate: function(testDate) {
                var testOption = this.options.maxDate;
                if (testOption === false) {
                    return false;
                }
                testOption = this.parseISO(testOption);
                testOption.adj(2, 1);
                return testOption < testDate;
            },
            afterToday: function(testDate) {
                var testOption = this.options.afterToday;
                if (testOption === false) {
                    return false;
                }
                return testDate < this.realToday;
            },
            beforeToday: function(testDate) {
                var testOption = this.options.beforeToday;
                if (testOption === false) {
                    return false;
                }
                return testDate > this.realToday;
            },
            minmaxDays: function(testDate) {
                var testOption1 = this.options.minDays, testOption2 = this.options.maxDays, validMin, validMax;
                if (testOption1 === false && testOption2 === false) {
                    return false;
                }
                validMin = testOption1 === false ? true : this.realToday.getEpochDays() - (testOption1 + 1) < testDate.getEpochDays();
                validMax = testOption2 === false ? true : this.realToday.getEpochDays() + (testOption2 + 1) > testDate.getEpochDays();
                return !(validMin && validMax);
            },
            minHour: function(testDate) {
                var testOption = this.options.minHour;
                if (testOption === false) {
                    return false;
                }
                return testDate.get(3) < testOption;
            },
            maxHour: function(testDate) {
                var testOption = this.options.maxHour;
                if (testOption === false) {
                    return false;
                }
                return testDate.get(3) > testOption;
            },
            minTime: function(testDate) {
                var testOption = this.options.minTime, splitOption = null, testHour = testDate.get(3);
                if (testOption === false) {
                    return false;
                }
                splitOption = this.options.minTime.split(":", 2);
                if (testHour < splitOption[0]) {
                    return true;
                }
                if (testHour > splitOption[0]) {
                    return false;
                }
                return testDate.get(4) < splitOption[1];
            },
            maxTime: function(testDate) {
                var testOption = this.options.maxTime, splitOption = null, testHour = testDate.get(3);
                if (testOption === false) {
                    return false;
                }
                splitOption = this.options.maxTime.split(":", 2);
                if (testHour < splitOption[0]) {
                    return false;
                }
                if (testHour > splitOption[0]) {
                    return true;
                }
                return testDate.get(4) > splitOption[1];
            },
            validHours: function(testDate) {
                return this.options.validHours.indexOf(testDate.get(3)) > -1;
            },
            blackDays: function(testDate) {
                var testOption = this.options.blackDays;
                if (testOption === false) {
                    return false;
                }
                return testOption.indexOf(testDate.getDay()) > -1;
            },
            blackDates: function(testDate) {
                var testOption = this.options.blackDates;
                if (testOption === false) {
                    return false;
                }
                return testOption.indexOf(testDate.iso()) > -1;
            },
            blackDatesRec: function(testDate) {
                var i, testOption = this.options.blackDatesRec;
                if (testOption === false) {
                    return false;
                }
                for (i = 0; i < testOption.length; i++) {
                    if ((testOption[i][0] === -1 || testOption[i][0] === testDate.get(0)) && (testOption[i][1] === -1 || testOption[i][1] === testDate.get(1)) && (testOption[i][2] === -1 || testOption[i][2] === testDate.get(2))) {
                        return true;
                    }
                }
                return false;
            }
        },
        _newDateChecker: function(testDate) {
            var w = this, itt, done = false, returnObject = {
                good: true,
                bad: false,
                failrule: false,
                passrule: false,
                dateObj: testDate.copy()
            }, badChecks = [ "blackDays", "blackDates", "blackDatesRec", "notToday", "maxYear", "minYear", "afterToday", "beforeToday", "maxDate", "minDate", "minmaxDays", "minHour", "maxHour", "minTime", "maxTime" ];
            w.realToday = new w._date();
            if (this.options.enableDates !== false) {
                if (w._newDateCheck.whiteDate.call(w, testDate)) {
                    returnObject.passrule = "enableDates";
                } else {
                    returnObject.bad = true;
                    returnObject.good = false;
                    returnObject.failrule = "enableDates";
                }
                return returnObject;
            }
            if (this.options.validHours !== false) {
                if (w._newDateCheck.validHours.call(w, testDate)) {
                    returnObject.passrule = "validHours";
                } else {
                    returnObject.bad = true;
                    returnObject.good = false;
                    returnObject.failrule = "validHours";
                }
                return returnObject;
            }
            if (w._newDateCheck.whiteDate.call(w, testDate)) {
                returnObject.passrule = "whiteDates";
                return returnObject;
            }
            for (itt = 0; itt < badChecks.length && !done; itt++) {
                if (w._newDateCheck[badChecks[itt]].call(w, testDate)) {
                    returnObject.bad = true;
                    returnObject.good = false;
                    returnObject.failrule = badChecks[itt];
                    done = true;
                }
            }
            return returnObject;
        },
        _getCleanDur: function() {
            var w = this, o = this, thisDuration = w.theDate.getEpoch() - w.initDate.getEpoch();
            if (thisDuration < 0) {
                thisDuration = 0;
                w.theDate = w.initDate.copy();
            }
            if (o.minDur !== false && thisDuration < o.minDur) {
                w.theDate = new w._date(w.initDate.getTime() + o.minDur * 1e3);
                thisDuration = o.minDur;
            }
            if (o.maxDur !== false && thisDuration > o.maxDur) {
                w.theDate = new w._date(w.initDate.getTime() + o.maxDur * 1e3);
                thisDuration = o.maxDur;
            }
            w.lastDuration = thisDuration;
            w.lastDurationA = w._dur(thisDuration * 1e3);
            return [ thisDuration, w._dur(thisDuration * 1e3) ];
        },
        _check: function() {
            var checkObj = this._newDateChecker(this.theDate);
            this.dateOK = checkObj.good === true;
            return checkObj.good;
        },
        _fixstepper: function(order) {
            var step = this.options.durationSteppers, actual = this.options.durationStep;
            if (order.indexOf("d") > -1) {
                step.d = actual;
            }
            if (order.indexOf("h") > -1) {
                step.d = 1;
                step.h = actual;
            }
            if (order.indexOf("i") > -1) {
                step.h = 1;
                step.i = actual;
            }
            if (order.indexOf("s") > -1) {
                step.i = 1;
                step.s = actual;
            }
        },
        _ThemeDateCK: {
            selected: function(testDate) {
                if (this.options.slideHighPick === false) {
                    return false;
                }
                if (typeof this.originalDate === "undefined") {
                    return false;
                }
                return this.originalDate.iso() === testDate.iso();
            },
            today: function(testDate) {
                if (this.options.slideHighToday === false) {
                    return false;
                }
                return this.realToday.iso() === testDate.iso();
            },
            highDates: function(testDate) {
                var testOption = this.options.highDates;
                if (testOption === false) {
                    return false;
                }
                return testOption.indexOf(testDate.iso()) > -1;
            },
            highDatesAlt: function(testDate) {
                var testOption = this.options.highDatesAlt;
                if (testOption === false) {
                    return false;
                }
                return testOption.indexOf(testDate.iso()) > -1;
            },
            highDatesRec: function(testDate) {
                var i, testOption = this.options.highDatesRec;
                if (testOption === false) {
                    return false;
                }
                for (i = 0; i < testOption.length; i++) {
                    if ((testOption[i][0] === -1 || testOption[i][0] === testDate.get(0)) && (testOption[i][1] === -1 || testOption[i][1] === testDate.get(1)) && (testOption[i][2] === -1 || testOption[i][2] === testDate.get(2))) {
                        return true;
                    }
                }
                return false;
            },
            highDays: function(testDate) {
                var testOption = this.options.highDays;
                if (testOption === false) {
                    return false;
                }
                return testOption.indexOf(testDate.getDay()) > -1;
            }
        },
        _parser: {
            default: function(str) {
                return str;
            }
        },
        _makeDate: function(str, extd) {
            var i, exp_temp, exp_format, grbg, w = this, o = this.options, defVal = this.options.defaultValue, adv = w.__fmt(), exp_input = null, exp_names = [], faildate = false, date = new w._date(), d = {
                year: -1,
                mont: -1,
                date: -1,
                hour: -1,
                mins: -1,
                secs: -1,
                week: false,
                wtyp: 4,
                wday: false,
                yday: false,
                meri: 0
            };
            if (typeof extd === "undefined") {
                extd = false;
            }
            str = typeof str === "undefined" ? "" : (w.__("useArabicIndic") === true ? w._dRep(str, -1) : str).trim();
            if (typeof o.mode === "undefined") {
                return date;
            }
            if (typeof w._parser[o.mode] !== "undefined") {
                return w._parser[o.mode].call(w, str);
            }
            if (o.mode === "durationbox" || o.mode === "durationflipbox") {
                adv = adv.replace(/%D([a-z])/gi, function(match, oper) {
                    switch (oper) {
                      case "d":
                      case "l":
                      case "M":
                      case "S":
                        return "(" + match + "|[0-9]+)";

                      default:
                        return ".+?";
                    }
                });
                adv = new RegExp("^" + adv + "$");
                exp_input = adv.exec(str);
                exp_format = adv.exec(w.__fmt());
                if (exp_input === null || exp_input.length !== exp_format.length) {
                    if (typeof defVal === "number" && defVal > 0) {
                        return new w._date((w.initDate.getEpoch() + parseInt(defVal, 10)) * 1e3);
                    }
                    return new w._date(w.initDate.getTime());
                }
                exp_temp = w.initDate.getEpoch();
                for (i = 1; i < exp_input.length; i++) {
                    grbg = parseInt(exp_input[i], 10);
                    if (exp_format[i].match(/^%Dd$/i)) {
                        exp_temp = exp_temp + grbg * 86400;
                    }
                    if (exp_format[i].match(/^%Dl$/i)) {
                        exp_temp = exp_temp + grbg * 3600;
                    }
                    if (exp_format[i].match(/^%DM$/i)) {
                        exp_temp = exp_temp + grbg * 60;
                    }
                    if (exp_format[i].match(/^%DS$/i)) {
                        exp_temp = exp_temp + grbg;
                    }
                }
                return new w._date(exp_temp * 1e3);
            }
            if (adv === "%J") {
                date = new w._date(str);
                if (isNaN(date.getDate())) {
                    date = new w._date();
                }
                return date;
            }
            adv = adv.replace(/%(0|-)*([a-z])/gi, function(match, pad, oper) {
                exp_names.push(oper);
                switch (oper) {
                  case "p":
                  case "P":
                  case "b":
                  case "B":
                    return "(" + match + "|.+?)";

                  case "H":
                  case "k":
                  case "I":
                  case "l":
                  case "m":
                  case "M":
                  case "S":
                  case "V":
                  case "U":
                  case "u":
                  case "W":
                  case "d":
                    return "(" + match + "|[0-9]{" + (pad === "-" ? "1," : "") + "2})";

                  case "j":
                    return "(" + match + "|[0-9]{3})";

                  case "s":
                    return "(" + match + "|[0-9]+)";

                  case "g":
                  case "y":
                    return "(" + match + "|[0-9]{2})";

                  case "E":
                  case "G":
                  case "Y":
                    return "(" + match + "|[0-9]{1,4})";

                  default:
                    exp_names.pop();
                    return ".+?";
                }
            });
            adv = new RegExp("^" + adv + "$");
            exp_input = adv.exec(str);
            exp_format = adv.exec(w.__fmt());
            if (exp_input === null || exp_input.length !== exp_format.length) {
                if (str !== "") {
                    faildate = true;
                }
                if (defVal !== false && defVal !== "") {
                    switch (typeof defVal) {
                      case "object":
                        if (typeof defVal.getDay === "function") {
                            date = defVal;
                        } else {
                            if (defVal.length === 3) {
                                date = w._pa(defVal, o.mode.substr(0, 4) === "time" ? date : false);
                            }
                        }
                        break;

                      case "number":
                        date = new w._date(defVal * 1e3);
                        break;

                      case "string":
                        if (defVal.substr(0, 1) === "+") {
                            date = new w._date().adj(5, parseInt(defVal.substr(1), 10));
                        } else if (defVal.substr(0, 1) === "-") {
                            date = new w._date().adj(5, -1 * parseInt(defVal.substr(1), 10));
                        } else {
                            if (o.mode.substr(0, 4) === "time") {
                                exp_temp = Object.assign([ 0, 0, 0 ], defVal.split(":", 3));
                                date = w._pa(exp_temp, date);
                            } else {
                                exp_temp = Object.assign([ 0, 0, 0 ], defVal.split("-", 3));
                                exp_temp[1]--;
                                date = w._pa(exp_temp, false);
                            }
                        }
                        break;
                    }
                }
                if (isNaN(date.getDate())) {
                    date = new w._date();
                }
            } else {
                for (i = 1; i < exp_input.length; i++) {
                    grbg = parseInt(exp_input[i], 10);
                    switch (exp_names[i - 1]) {
                      case "s":
                        return new w._date(parseInt(exp_input[i], 10) * 1e3);

                      case "Y":
                      case "G":
                        d.year = grbg;
                        break;

                      case "E":
                        d.year = grbg - 543;
                        break;

                      case "y":
                      case "g":
                        if (o.afterToday || grbg < o.twoDigitYearCutoff) {
                            d.year = 2e3 + grbg;
                        } else {
                            d.year = 1900 + grbg;
                        }
                        break;

                      case "m":
                        d.mont = grbg - 1;
                        break;

                      case "d":
                        d.date = grbg;
                        break;

                      case "H":
                      case "k":
                      case "I":
                      case "l":
                        d.hour = grbg;
                        break;

                      case "M":
                        d.mins = grbg;
                        break;

                      case "S":
                        d.secs = grbg;
                        break;

                      case "u":
                        d.wday = grbg - 1;
                        break;

                      case "w":
                        d.wday = grbg;
                        break;

                      case "j":
                        d.yday = grbg;
                        break;

                      case "V":
                        d.week = grbg;
                        d.wtyp = 4;
                        break;

                      case "U":
                        d.week = grbg;
                        d.wtyp = 0;
                        break;

                      case "W":
                        d.week = grbg;
                        d.wtyp = 1;
                        break;

                      case "p":
                      case "P":
                        grbg = new RegExp("^" + exp_input[i] + "$", "i");
                        d.meri = grbg.test(w.__("meridiem")[0]) ? -1 : 1;
                        break;

                      case "b":
                        exp_temp = w.__("monthsOfYearShort").indexOf(exp_input[i]);
                        if (exp_temp > -1) {
                            d.mont = exp_temp;
                        }
                        break;

                      case "B":
                        exp_temp = w.__("monthsOfYear").indexOf(exp_input[i]);
                        if (exp_temp > -1) {
                            d.mont = exp_temp;
                        }
                        break;
                    }
                }
                if (d.meri !== 0) {
                    if (d.meri === -1 && d.hour === 12) {
                        d.hour = 0;
                    }
                    if (d.meri === 1 && d.hour !== 12) {
                        d.hour = d.hour + 12;
                    }
                }
                date = new w._date(w._n(d.year, 0), w._n(d.mont, 0), w._n(d.date, 1), w._n(d.hour, 0), w._n(d.mins, 0), w._n(d.secs, 0), 0);
                if (d.year < 100 && d.year !== -1) {
                    date.setFullYear(d.year);
                }
                if (d.mont > -1 && d.date > -1 || d.hour > -1 && d.mins > -1 && d.secs > -1) {
                    if (extd === true) {
                        return [ date, faildate ];
                    } else {
                        return date;
                    }
                }
                if (d.week !== false) {
                    date.setDWeek(d.wtyp, d.week);
                    if (d.date > -1) {
                        date.setDate(d.date);
                    }
                }
                if (d.yday !== false) {
                    date.setD(1, 0).setD(2, 1).adj(2, d.yday - 1);
                }
                if (d.wday !== false) {
                    date.adj(2, d.wday - date.getDay());
                }
            }
            if (extd === true) {
                return [ date, faildate ];
            } else {
                return date;
            }
        },
        _event: function(e, p) {
            var tmp, i, w = $(this).data("jtsage-datebox"), o = $(this).data("jtsage-datebox").options;
            if (!e.isPropagationStopped()) {
                switch (p.method) {
                  case "close":
                    if (typeof p.closeCancel === "undefined") {
                        p.closeCancel = false;
                    }
                    w.cancelClose = p.closeCancel;
                    w.close();
                    break;

                  case "open":
                    w.open();
                    break;

                  case "set":
                    if (typeof p.value === "object") {
                        w.theDate = p.value;
                        w._t({
                            method: "doset"
                        });
                    } else {
                        if (o.displayMode === "inline" || o.displayMode === "blind") {
                            w.originalDate = w.theDate;
                        }
                        $(this).val(p.value);
                        if (o.linkedField !== false) {
                            if (typeof o.linkedField === "string") {
                                $(o.linkedField).val(w.callFormat(o.linkedFieldFormat, w.theDate, false));
                            } else {
                                for (i = 0; i < o.linkedField.length; i++) {
                                    $(o.linkedField[i].id).val(w.callFormat(o.linkedField[i].format, w.theDate, false));
                                }
                            }
                        }
                        w.skipChange = true;
                        $(this).trigger("change");
                    }
                    break;

                  case "doset":
                    tmp = "_" + w.options.mode + "DoSet";
                    if (typeof w[tmp] === "function") {
                        w[tmp].call(w);
                    } else {
                        w._t({
                            method: "set",
                            value: w._formatter(w.__fmt(), w.theDate),
                            date: w.theDate
                        });
                    }
                    break;

                  case "dooffset":
                    if (p.type) {
                        w._offset(p.type, p.amount, true);
                    }
                    break;

                  case "dorefresh":
                    w.refresh();
                    break;

                  case "doclear":
                    $(this).val("").trigger("change");
                    break;

                  case "clear":
                    $(this).trigger("change");
                    break;
                }
            }
        },
        _build: {
            default: function() {
                this.d.headerText = "Error";
                if (this.d.intHTML !== false) {
                    this.d.intHTML.remove().empty();
                }
                this.d.intHTML = $("<div style='width:100%'><h2 style='text-align:center;color:red;'>Unknown Mode</h2></div>");
            },
            calbox: function() {
                var w = this, i, o = this.options, date_realToday = new w._date(), date_firstOfMonth = w.theDate.copy(false, [ 0, 0, 1, 12, 1, 1, 1 ]), date_lastOfMonth = date_firstOfMonth.copy([ 0, 1 ]).adj(2, -1), date_displayMonth = date_firstOfMonth.get(1), date_displayYear = date_firstOfMonth.get(0), grid_headOffset = w.__("calStartDay") - date_firstOfMonth.getDay(), grid_tailOffset = 6 + (w.__("calStartDay") - date_lastOfMonth.getDay()), date_firstOfGrid = date_firstOfMonth.copy([ 0, 0, grid_headOffset ]), date_lastOfGrid = date_lastOfMonth.copy([ 0, 0, grid_tailOffset ]), grid_Weeks = (date_lastOfGrid.getEpochDays() - date_firstOfGrid.getEpochDays() + 1) / 7, date_working = date_firstOfGrid.copy(), grid_Cols = o.calShowWeek ? 8 : 7, calContent = "", calCntlRow = "", cntlRow, cntlCol, cntlObj = {}, weekdayControl = "";
                w.firstOfGrid = date_firstOfGrid;
                w.lastOfGrid = date_lastOfGrid;
                w.firstOfMonth = date_firstOfMonth;
                w.lastOfMonth = date_lastOfMonth;
                if (typeof w.d.intHTML !== "boolean") {
                    w.d.intHTML.remove();
                    w.d.intHTML = null;
                }
                w.d.headerText = w._grabLabel(w.__("titleDateDialogLabel"));
                w.d.intHTML = $("<span>");
                w.d.intHTML.addClass(o.theme_spanStyle);
                if (o.calNoHeader === false) {
                    calContent = w.style_pnHead(w._formatter(w.__("calHeaderFormat"), w.theDate), w.__("isRTL") === true ? o.theme_cal_NextBtn : o.theme_cal_PrevBtn, w.__("isRTL") === true ? o.theme_cal_PrevBtn : o.theme_cal_NextBtn, "dbCalPrev", "dbCalNext");
                    if (w.__("isRTL") === true) {
                        calContent.children().each(function(i, item) {
                            calContent.prepend(item);
                        });
                    }
                    calContent.appendTo(w.d.intHTML);
                    w.d.intHTML.on(o.clickEvent, ".dbCalNext", function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        if (w.theDate.getDate() > 28) {
                            w.theDate.setDate(1);
                        }
                        w._offset("m", 1);
                        return false;
                    }).on(o.clickEvent, ".dbCalPrev", function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        if (w.theDate.getDate() > 28) {
                            w.theDate.setDate(1);
                        }
                        w._offset("m", -1);
                        return false;
                    });
                }
                if (o.calUsePickers !== false) {
                    calContent = w.style_picker(w._pickRanges(date_displayMonth, date_displayYear, date_realToday.get(0), o.calYearPickRelative), o.theme_cal_Pickers, "dbCalPickMonth", "dbCalPickYear");
                    if (w.__("isRTL") === true) {
                        calContent.children().each(function(i, item) {
                            calContent.prepend(item);
                        });
                    }
                    calContent.appendTo(w.d.intHTML);
                    w.d.intHTML.on("change", "#dbCalPickMonth, #dbCalPickYear", function() {
                        if (w.theDate.get(2) > 28) {
                            w.theDate.setD(2, 1);
                        }
                        w.theDate.setD(1, $("#dbCalPickMonth").val());
                        w.theDate.setD(0, $("#dbCalPickYear").val());
                        w._t({
                            method: "displayChange",
                            selectedDate: w.originalDate,
                            shownDate: w.theDate,
                            thisChange: "p",
                            thisChangeAmount: null,
                            gridStart: w.firstOfGrid,
                            gridEnd: w.lastOfGrid,
                            selectedInGrid: w.isSelectedInCalGrid(),
                            selectedInBounds: w.isSelectedInBounds()
                        });
                        w.refresh();
                    });
                }
                calContent = $(w.style_calGrid()).appendTo(w.d.intHTML).find(".dbCalGrid").first();
                if (o.calShowDays) {
                    w._cal_days = w.__("daysOfWeekShort").concat(w.__("daysOfWeekShort"));
                    weekdayControl = w.style_calRow();
                    if (o.calShowWeek) {
                        weekdayControl.append(w.style_calTxt("&nbsp", false, 8));
                    }
                    for (i = 0; i <= 6; i++) {
                        weekdayControl.append(w.style_calTxt(w._cal_days[(i + w.__("calStartDay")) % 7], true, grid_Cols));
                    }
                    weekdayControl.appendTo(calContent);
                    if (w.__("isRTL") === true) {
                        weekdayControl.children().each(function(i, item) {
                            weekdayControl.prepend(item);
                        });
                    }
                }
                o.calFormatter = w._prepFunc(o.calFormatter);
                o.calBeforeAppendFunc = w._prepFunc(o.calBeforeAppendFunc);
                for (cntlRow = 0; cntlRow < grid_Weeks; cntlRow++) {
                    calCntlRow = w.style_calRow();
                    if (o.calShowWeek) {
                        calCntlRow.append(w.style_calTxt(date_working.getDWeek(4), false, 8));
                    }
                    for (cntlCol = 0; cntlCol < 7; cntlCol++) {
                        cntlObj = Object.assign(w._newDateChecker(date_working), w._cal_ThemeDate(date_working, date_displayMonth));
                        cntlObj.displayText = o.calFormatter === false ? cntlObj.dateObj.get(2) : o.calFormatter.call(w, cntlObj);
                        cntlObj.htmlObj = w.style_calBtn(cntlObj, grid_Cols);
                        cntlObj.eventObj = cntlObj.htmlObj.find(".dbEvent").first();
                        cntlObj.eventObj.data(cntlObj);
                        if (o.calBeforeAppendFunc !== false) {
                            cntlObj = o.calBeforeAppendFunc.call(w, cntlObj);
                        }
                        if (o.calOnlyMonth === false || cntlObj.inBounds === true) {
                            calCntlRow.append(cntlObj.htmlObj);
                        } else {
                            calCntlRow.append(w.style_calTxt("&nbsp", false, grid_Cols));
                        }
                        date_working.adj(2, 1);
                    }
                    if (w.__("isRTL") === true) {
                        calCntlRow.children().each(function(i, item) {
                            calCntlRow.prepend(item);
                        });
                    }
                    calCntlRow.appendTo(calContent);
                }
                if (o.calShowDateList !== false && o.calDateList !== false) {
                    w.style_dateList(w.__("calDateListLabel"), o.calDateList, o.theme_cal_DateList, "dbCalPickList").appendTo(w.d.intHTML);
                    w.d.intHTML.on("change", "#dbCalPickList", function() {
                        var iPut = $(this).val().split("-");
                        w.theDate = new w._date(iPut[0], iPut[1] - 1, iPut[2], 12, 1, 1, 1);
                        w._t({
                            method: "doset"
                        });
                    });
                }
                w.d.intHTML.append(w._doBottomButtons.call(w, false));
                w.d.intHTML.on(o.clickEvent, ".dbEvent", function(e) {
                    e.preventDefault();
                    if ($(this).data("good")) {
                        w.theDate = $(this).data("dateObj").copy();
                        w._t({
                            method: "set",
                            value: w._formatter(w.__fmt(), w.theDate),
                            date: w.theDate
                        });
                        w._t({
                            method: "close"
                        });
                    }
                }).on(w.wheelEvent, function(e, d) {
                    e.preventDefault();
                    d = typeof d === "undefined" ? Math.sign(e.originalEvent.wheelDelta) : d;
                    w.theDate.setD(2, 1);
                    w._offset("m", d > 0 ? 1 : -1);
                });
            },
            timebox: function() {
                this._build.datebox.call(this);
            },
            datetimebox: function() {
                this._build.datebox.call(this);
            },
            durationbox: function() {
                this._build.datebox.apply(this, []);
            },
            datebox: function() {
                var offAmount, i, ctrlWrk, ctrlRow, w = this, o = this.options, ctrlContainer = w.style_dboxCtr(), dur = o.mode === "durationbox" ? true : false, defDurOrder = [ "d", "h", "i", "s" ];
                if (typeof w.d.intHTML !== "boolean") {
                    w.d.intHTML.empty().remove();
                }
                w.d.headerText = w._grabLabel(o.mode === "datebox" || o.mode === "datetimebox" ? w.__("titleDateDialogLabel") : w.__("titleTimeDialogLabel"));
                w.d.intHTML = $("<span>");
                w.d.intHTML.addClass(o.theme_spanStyle);
                w.fldOrder = w._getFldOrder(o.mode);
                if (!dur) {
                    w._check();
                    w._minStepFix();
                } else {
                    w.dateOK = true;
                    w._fixstepper(w.fldOrder);
                }
                if (o.mode === "datebox" || o.mode === "datetimebox") {
                    w.style_subHead(w._formatter(w.__("headerFormat"), w.theDate)).appendTo(w.d.intHTML);
                }
                ctrlRow = w.style_dboxRow();
                for (i = 0; i < w.fldOrder.length; i++) {
                    if (w.fldOrder[i] === "a" && w.__("timeFormat") !== 12) {
                        continue;
                    }
                    if (dur) {
                        offAmount = o.durationSteppers[w.fldOrder[i]];
                    } else {
                        offAmount = w.fldOrder[i] === "i" ? o.minuteStep : 1;
                    }
                    ctrlWrk = w.style_dboxCtrl(o.theme_dbox_PrevBtn, o.theme_dbox_NextBtn, w.fldOrder[i], dur ? w.__("durationLabel")[defDurOrder.indexOf(w.fldOrder[i])] : null, o.theme_dbox_Inputs);
                    ctrlWrk.find("input").data({
                        field: w.fldOrder[i],
                        amount: offAmount
                    });
                    ctrlWrk.find(".dbBoxNext").data({
                        field: w.fldOrder[i],
                        amount: offAmount
                    });
                    ctrlWrk.find(".dbBoxPrev").data({
                        field: w.fldOrder[i],
                        amount: offAmount * -1
                    });
                    ctrlRow.append(ctrlWrk);
                }
                if (w.__("isRTL") === true) {
                    ctrlRow.children().each(function(i, item) {
                        ctrlRow.prepend(item);
                    });
                }
                ctrlContainer.append(ctrlRow);
                ctrlContainer.appendTo(w.d.intHTML);
                w._dbox_run_update(true);
                w.d.intHTML.append(w._doBottomButtons.call(w, true));
                w.d.intHTML.on("change", "input", function() {
                    w._dbox_enter($(this));
                }).on("keypress", "input", function(e) {
                    if (e.which === 13 && w.dateOK === true) {
                        w._dbox_enter($(this));
                        w._t({
                            method: "set",
                            value: w._formatter(w.__fmt(), w.theDate),
                            date: w.theDate
                        });
                        w._t({
                            method: "close"
                        });
                    }
                }).on(w.wheelEvent, "input", function(e, d) {
                    e.preventDefault();
                    d = typeof d === "undefined" ? Math.sign(e.originalEvent.wheelDelta) : d;
                    w._offset($(this).data("field"), (d < 0 ? -1 : 1) * $(this).data("amount"));
                }).on(o.clickEvent, ".dbBoxPrev, .dbBoxNext", function(e) {
                    w.d.intHTML.find(":focus").blur();
                    e.preventDefault();
                    w._offset($(this).data("field"), $(this).data("amount"));
                });
            },
            timeflipbox: function() {
                this._build.flipbox.call(this);
            },
            datetimeflipbox: function() {
                this._build.flipbox.call(this);
            },
            durationflipbox: function() {
                this._build.flipbox.call(this);
            },
            flipbox: function() {
                var thisField, cntlFieldIdx, cntlRow, w = this, o = this.options, g = this.drag, flipContent = w.style_fboxCtr(o.theme_fbox_RollHeight).addClass("dbRollerV "), cntlContain = "", cntlRoller = "", dur = o.mode === "durationflipbox" ? true : false;
                if (typeof w.d.intHTML !== "boolean") {
                    w.d.intHTML.empty().remove();
                } else {
                    w.d.input.on("datebox", function(e, p) {
                        if (p.method === "postrefresh") {
                            w.style_fboxPos();
                        }
                    });
                }
                w.d.headerText = w._grabLabel(o.mode === "datebox" || o.mode === "datetimebox" ? w.__("titleDateDialogLabel") : w.__("titleTimeDialogLabel"));
                w.d.intHTML = $("<span>");
                w.d.intHTML.addClass(o.theme_spanStyle);
                w.fldOrder = w._getFldOrder(o.mode);
                if (!dur) {
                    w._check();
                    w._minStepFix();
                } else {
                    w.dateOK = true;
                    w._getCleanDur();
                    w._fixstepper(w.fldOrder);
                }
                o.fboxNatural = o.fboxNatural === "default" ? dur ? true : false : o.fboxNatural;
                if (o.mode === "flipbox" || o.mode === "datetimeflipbox") {
                    w.style_subHead(w._formatter(w.__("headerFormat"), w.theDate)).appendTo(w.d.intHTML);
                }
                if (dur) {
                    cntlContain = w.style_fboxDurLbls();
                    for (cntlFieldIdx = 0; cntlFieldIdx < w.fldOrder.length; cntlFieldIdx++) {
                        thisField = w.fldOrder[cntlFieldIdx];
                        cntlContain.append(w.style_fboxDurLbl(w.__("durationLabel")[[ "d", "h", "i", "s" ].indexOf(thisField)], w.fldOrder.length));
                    }
                    if (w.__("isRTL") === true) {
                        cntlContain.css({
                            direction: "rtl"
                        });
                    }
                    w.d.intHTML.append(cntlContain);
                }
                for (cntlFieldIdx = 0; cntlFieldIdx < w.fldOrder.length; cntlFieldIdx++) {
                    thisField = w.fldOrder[cntlFieldIdx];
                    cntlContain = w.style_fboxRollCtr(w.fldOrder.length).addClass("dbRollerC");
                    cntlRoller = w.style_fboxRollPrt().addClass("dbRoller");
                    cntlContain.data({
                        field: thisField,
                        amount: dur ? o.durationSteppers[thisField] : thisField === "i" ? o.minuteStep : 1
                    });
                    for (cntlRow = -1 * o.flen[thisField]; cntlRow < o.flen[thisField] + 1; cntlRow++) {
                        if (!dur) {
                            cntlRoller.append(w.style_fboxRollCld(w._fbox_do_roll_math(thisField, cntlRow), cntlRow === 0 ? w.dateOK ? o.theme_fbox_Selected : o.theme_fbox_Forbidden : o.theme_fbox_Default));
                        } else {
                            cntlRoller.append(w.style_fboxRollCld(w._fbox_do_dur_math(thisField, cntlRow, cntlFieldIdx), cntlRow === 0 ? o.theme_fbox_Selected : o.theme_fbox_Default));
                        }
                    }
                    if (o.fboxNatural) {
                        cntlRoller.children().each(function(i, item) {
                            cntlRoller.prepend(item);
                        });
                    }
                    cntlContain.append(cntlRoller);
                    if (w.__("isRTL") === true) {
                        flipContent.prepend(cntlContain);
                    } else {
                        flipContent.append(cntlContain);
                    }
                }
                w.d.intHTML.append(flipContent);
                w.style_fboxLens().addClass("dbLens").css({
                    pointerEvents: "none",
                    position: "relative"
                }).appendTo(w.d.intHTML);
                w.d.intHTML.append(w._doBottomButtons.call(w, true));
                w.d.intHTML.on(g.eStart, ".dbRoller", function(e, f) {
                    if (!g.move) {
                        if (typeof f !== "undefined") {
                            e = f;
                        }
                        g.move = true;
                        g.target = $(this).children().first();
                        g.pos = parseInt(g.target.css("marginTop").replace(/px/i, ""), 10);
                        g.start = e.type.substr(0, 5) === "touch" ? e.originalEvent.changedTouches[0].pageY : e.pageY;
                        g.end = false;
                        g.direc = o.fboxNatural ? -1 : 1;
                        g.velocity = 0;
                        g.time = Date.now();
                        e.stopPropagation();
                        e.preventDefault();
                    }
                });
            },
            slidebox: function() {
                var w = this, o = this.options, date_realToday = new w._date(), date_displayMonth = w.theDate.get(1), date_displayYear = w.theDate.get(0), date_working = w.theDate.copy(false, [ 0, 0, 0, 12, 1, 1, 1 ]).adj(2, -3), calContent = "", calCntlRow = "", cntlCol, cntlObj = {};
                if (typeof w.d.intHTML !== "boolean") {
                    w.d.intHTML.remove();
                    w.d.intHTML = null;
                }
                w.dateOK = true;
                w.d.headerText = w._grabLabel(w.__("titleDateDialogLabel"));
                w.d.intHTML = $("<span>");
                w.d.intHTML.addClass(o.theme_spanStyle);
                if (o.slideNoHeader === false) {
                    w.style_pnHead(w._formatter(w.__("calHeaderFormat"), w.theDate), o.theme_slide_PrevBtn, o.theme_slide_NextBtn, "dbSlidePrev", "dbSlideNext").appendTo(w.d.intHTML);
                    w.d.intHTML.on(o.clickEvent, ".dbSlideNext", function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        if (w.theDate.getDate() > 28) {
                            w.theDate.setDate(1);
                        }
                        w._offset("m", 1);
                        return false;
                    }).on(o.clickEvent, ".dbSlidePrev", function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        if (w.theDate.getDate() > 28) {
                            w.theDate.setDate(1);
                        }
                        w._offset("m", -1);
                        return false;
                    });
                }
                if (o.slideUsePickers !== false) {
                    w.style_picker(w._pickRanges(date_displayMonth, date_displayYear, date_realToday.get(0), o.slideYearPickRelative), o.theme_slide_Pickers, "dbSlidePickMonth", "dbSlidePickYear").appendTo(w.d.intHTML);
                    w.d.intHTML.on("change", "#dbSlidePickMonth, #dbSlidePickYear", function() {
                        if (w.theDate.get(2) > 28) {
                            w.theDate.setD(2, 1);
                        }
                        w.theDate.setD(1, $("#dbSlidePickMonth").val());
                        w.theDate.setD(0, $("#dbSlidePickYear").val());
                        w.refresh();
                    });
                }
                calContent = $(w.style_slideGrid()).appendTo(w.d.intHTML).find(".dbSlideGrid").first();
                calCntlRow = w.style_slideRow();
                calCntlRow.append(w.style_slideCtrl("dbSlideWkPrev", w.__("isRTL") === true ? o.theme_slide_NextDateBtn : o.theme_slide_PrevDateBtn));
                for (cntlCol = -3; cntlCol <= 3; cntlCol++) {
                    cntlObj = Object.assign(w._newDateChecker(date_working), w._slide_ThemeDate(date_working));
                    cntlObj.htmlObj = w.style_slideBtn(cntlObj);
                    cntlObj.eventObj = cntlObj.htmlObj.find(".dbEventS").first();
                    cntlObj.eventObj.data(cntlObj);
                    calCntlRow.append(cntlObj.htmlObj);
                    date_working.adj(2, 1);
                }
                calCntlRow.append(w.style_slideCtrl("dbSlideWkNext", w.__("isRTL") === true ? o.theme_slide_PrevDateBtn : o.theme_slide_NextDateBtn));
                if (w.__("isRTL") === true) {
                    calCntlRow.children().each(function(i, item) {
                        calCntlRow.prepend(item);
                    });
                }
                calCntlRow.appendTo(calContent);
                if (o.slideShowDateList !== false && o.slideDateList !== false) {
                    w.style_dateList(w.__("calDateListLabel"), o.slideDateList, o.theme_slide_DateList, "dbSlidePickList").appendTo(w.d.intHTML);
                    w.d.intHTML.on("change", "#dbSlidePickList", function() {
                        var iPut = $(this).val().split("-");
                        w.theDate = new w._date(iPut[0], iPut[1] - 1, iPut[2], 12, 1, 1, 1);
                        w._t({
                            method: "doset"
                        });
                    });
                }
                w.d.intHTML.append(w._doBottomButtons.call(w, false));
                w.d.intHTML.on(o.clickEvent, ".dbEventS", function(e) {
                    e.preventDefault();
                    if ($(this).data("good")) {
                        w.theDate = $(this).data("dateObj").copy();
                        w._t({
                            method: "set",
                            value: w._formatter(w.__fmt(), w.theDate),
                            date: w.theDate
                        });
                        w._t({
                            method: "close"
                        });
                    }
                }).on(o.clickEvent, ".dbSlideWkNext", function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    w._offset("d", 7);
                    return false;
                }).on(o.clickEvent, ".dbSlideWkPrev", function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    w._offset("d", -7);
                    return false;
                }).on(w.wheelEvent, function(e, d) {
                    e.preventDefault();
                    d = typeof d === "undefined" ? Math.sign(e.originalEvent.wheelDelta) : d;
                    w._offset("d", d > 0 ? 7 : -7);
                });
            }
        },
        _drag: {
            default: function() {
                return false;
            },
            timeflipbox: function() {
                this._drag.flipbox.call(this);
            },
            datetimeflipbox: function() {
                this._drag.flipbox.call(this);
            },
            durationflipbox: function() {
                this._drag.flipbox.call(this);
            },
            flipbox: function() {
                var w = this, o = this.options, g = this.drag;
                $(document).on(g.eMove, function(e) {
                    if (g.move && o.mode.slice(-7) === "flipbox") {
                        g.end = e.type.substr(0, 5) === "touch" ? e.originalEvent.changedTouches[0].pageY : e.pageY;
                        g.target.css("margin-top", g.pos + g.end - g.start);
                        g.elapsed = Date.now() - g.time;
                        g.velocity = .8 * (100 * (g.end - g.start) / (1 + g.elapsed)) + .2 * g.velocity;
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                    }
                });
                $(document).on(g.eEnd, function(e) {
                    var eachItem, delta, currentPosition, goodPosition, totalMove, numberFull, goodGuess;
                    if (g.move && o.mode.slice(-7) === "flipbox") {
                        if (g.velocity < 15 && g.velocity > -15 || !o.useKinetic) {
                            g.move = false;
                            if (g.end !== false) {
                                e.preventDefault();
                                e.stopPropagation();
                                g.tmp = g.target.closest(".dbRollerC");
                                eachItem = o.flipSizeOverride !== false ? o.flipSizeOverride : g.target[0].getBoundingClientRect().height;
                                w._offset(g.tmp.data("field"), parseInt((g.start - g.end) / eachItem, 10) * g.tmp.data("amount") * g.direc);
                            }
                            g.start = false;
                            g.end = false;
                        } else {
                            g.move = false;
                            g.start = false;
                            g.end = false;
                            g.tmp = g.target.closest(".dbRollerC");
                            eachItem = o.flipSizeOverride !== false ? o.flipSizeOverride : g.target[0].getBoundingClientRect().height;
                            delta = -(g.velocity * .8) * Math.exp(-g.elapsed / 325) * 8 * -1;
                            currentPosition = parseInt(g.target.css("marginTop").replace(/px/i, ""), 10);
                            goodPosition = parseInt(currentPosition + delta, 10);
                            totalMove = g.pos - goodPosition;
                            numberFull = Math.round(totalMove / eachItem);
                            goodGuess = numberFull * g.tmp.data("amount") * g.direc;
                            g.target.animate({
                                marginTop: goodPosition
                            }, parseInt(1e4 / g.velocity) + 1e3, function() {
                                w._offset(g.tmp.data("field"), goodGuess);
                            });
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    }
                });
            }
        },
        _offset: function(oper, amount, update) {
            var testCurrent, condHigh, condLow, condMulti, w = this, o = w.options, operNum = [ "y", "m", "d", "h", "i", "s" ].indexOf(oper), lastDate = 32 - w.theDate.copy([ 0 ], [ 0, 0, 32, 13 ]).getDate(), thisYear = [ 31, 32 - w.theDate.copy([ 0 ], [ 0, 1, 32, 13 ]).getDate(), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ], rolloverAllowed = oper !== "a" && (oper === "y" || typeof o.rolloverMode[oper] === "undefined" || o.rolloverMode[oper] === true);
            if (typeof update === "undefined") {
                update = true;
            }
            if (oper === "y" && w.theDate.get(1) === 1 && w.theDate.get(2) === 29) {
                w.theDate.setD(2, 28);
            }
            if (oper === "a") {
                if (amount % 2 !== 0) {
                    testCurrent = w.theDate.get(3) > 11 ? -12 : 12;
                    w.theDate.adj(3, testCurrent);
                }
            } else if (rolloverAllowed) {
                w.theDate.adj(operNum, amount);
            } else {
                switch (oper) {
                  case "m":
                    condHigh = 11;
                    condLow = 0;
                    condMulti = 12;
                    break;

                  case "d":
                    condHigh = lastDate;
                    condLow = 1;
                    condMulti = lastDate;
                    break;

                  case "h":
                    condHigh = 23;
                    condLow = 0;
                    condMulti = 24;
                    break;

                  case "i":
                  case "s":
                    condHigh = 59;
                    condLow = 0;
                    condMulti = 60;
                    break;
                }
                testCurrent = w.theDate.get(operNum) + amount;
                if (testCurrent < condLow) {
                    testCurrent = testCurrent % condMulti + condMulti;
                } else if (testCurrent > condHigh) {
                    testCurrent = testCurrent % condMulti;
                }
                if (oper === "m" && w.theDate.get(2) > thisYear[testCurrent]) {
                    w.theDate.setD(2, thisYear[testCurrent]);
                }
                w.theDate.setD(operNum, testCurrent);
            }
            if (update === true) {
                w.refresh();
            }
            if (o.useImmediate) {
                w._t({
                    method: "doset"
                });
            }
            if (o.mode === "calbox") {
                w._t({
                    method: "displayChange",
                    selectedDate: w.originalDate,
                    shownDate: w.theDate,
                    thisChange: oper,
                    thisChangeAmount: amount,
                    gridStart: w.getCalStartGrid(),
                    gridEnd: w.getCalEndGrid(),
                    selectedInGrid: w.isSelectedInCalGrid(),
                    selectedInBounds: w.isSelectedInBounds()
                });
            }
            w._t({
                method: "offset",
                type: oper,
                amount: amount,
                newDate: w.theDate
            });
        },
        _startOffset: function(date) {
            var o = this.options;
            if (o.startOffsetYears !== false) {
                date.adj(0, o.startOffsetYears);
            }
            if (o.startOffsetMonths !== false) {
                date.adj(1, o.startOffsetMonths);
            }
            if (o.startOffsetDays !== false) {
                date.adj(2, o.startOffsetDays);
            }
            return date;
        },
        _posZero: function(test) {
            return test < 0 ? 0 : test;
        },
        getModalPosition: function() {
            var w = this, fixed = this.options.displayForcePosition, widget = w.d.mainWrap[0].getBoundingClientRect();
            if (fixed !== false) {
                return {
                    position: "absolute",
                    top: fixed[0],
                    left: fixed[1]
                };
            }
            return {
                position: "fixed",
                top: "50%",
                left: "50%",
                "margin-left": -1 * (widget.width / 2),
                "margin-top": -1 * (widget.height / 2)
            };
        },
        getDropPosition: function(placement) {
            var w = this, compd, o = this.options, fixed = this.options.displayForcePosition, rect = w.d.wrap[0].getBoundingClientRect(), widget = w.d.mainWrap[0].getBoundingClientRect(), tOff = window.pageYOffset, lOff = window.pageXOffset, smallScr = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= o.breakpointWidth.replace("px", "");
            compd = {
                centerLeft: {
                    top: w._posZero(tOff + rect.top + rect.height / 2 - widget.height / 2),
                    left: w._posZero(lOff + rect.left)
                },
                centerRight: {
                    top: w._posZero(tOff + rect.top + rect.height / 2 - widget.height / 2),
                    left: w._posZero(lOff + rect.left + rect.width - widget.width)
                },
                centerMiddle: {
                    top: w._posZero(tOff + rect.top + rect.height / 2 - widget.height / 2),
                    left: w._posZero(lOff + rect.left + rect.width / 2 - widget.width / 2)
                },
                topLeft: {
                    top: w._posZero(tOff + rect.top - widget.height - 1),
                    left: w._posZero(lOff + rect.left)
                },
                topRight: {
                    top: w._posZero(tOff + rect.top - widget.height - 1),
                    left: w._posZero(lOff + rect.left + rect.width - widget.width)
                },
                topMiddle: {
                    top: w._posZero(tOff + rect.top - widget.height - 1),
                    left: w._posZero(lOff + rect.left + rect.width / 2 - widget.width / 2)
                },
                bottomLeft: {
                    top: w._posZero(tOff + rect.top + rect.height),
                    left: w._posZero(lOff + rect.left)
                },
                bottomRight: {
                    top: w._posZero(tOff + rect.top + rect.height),
                    left: w._posZero(lOff + rect.left + rect.width - widget.width)
                },
                bottomMiddle: {
                    top: w._posZero(tOff + rect.top + rect.height),
                    left: w._posZero(lOff + rect.left + rect.width / 2 - widget.width / 2)
                }
            };
            if (typeof compd[placement] === "undefined") {
                placement = "bottomRight";
            }
            if (fixed !== false) {
                return {
                    position: "absolute",
                    top: fixed[0],
                    left: fixed[1]
                };
            }
            return {
                position: "absolute",
                top: compd[placement].top,
                left: smallScr ? 0 : compd[placement].left
            };
        },
        getTheDate: function() {
            return this.theDate;
        },
        getSelectedDate: function() {
            return this.originalDate;
        },
        getLastDur: function() {
            return this.lastDuration;
        },
        dateVisible: function() {
            if (typeof this.isSelectedInCalGrid === "undefined") {
                return true;
            }
            return this.isSelectedInCalGrid();
        },
        setTheDate: function(newDate) {
            if (typeof newDate === "object") {
                this.theDate = newDate;
            } else {
                this.theDate = this._makeDate(newDate);
            }
            this.refresh();
            this._t({
                method: "doset"
            });
        },
        parseDate: function(format, strdate) {
            var retty, w = this;
            w.fmtOver = format;
            retty = w._makeDate(strdate);
            w.fmtOver = false;
            return retty;
        },
        parseISO: function(strDate) {
            return this.parseDate("%Y-%m-%d", strDate);
        },
        callFormat: function(format, date, allowArIn) {
            if (typeof allowArIn === "undefined") {
                allowArIn = false;
            }
            return this._formatter(format, date, allowArIn);
        },
        refresh: function() {
            var w = this, o = this.options;
            if (typeof w._build[o.mode] !== "function") {
                w._build["default"].call(w);
            } else {
                w._build[o.mode].call(w);
            }
            if (w.__("useArabicIndic") === true) {
                w._doIndic();
            }
            w.d.mainWrap.append(w.d.intHTML);
            w._t({
                method: "postrefresh"
            });
        },
        applyMinMax: function(refresh, override) {
            var valueFromAttr, w = this, o = this.options, ISOPattern = RegExp(/\d\d\d\d-\d\d-\d\d/);
            if (typeof refresh === "undefined") {
                refresh = true;
            }
            if (typeof override === "undefined") {
                override = true;
            }
            if (override === true || o.minDate === false) {
                valueFromAttr = w.d.input.attr("min");
                if (ISOPattern.test(valueFromAttr)) {
                    o.minDate = valueFromAttr;
                }
            }
            if (override === true || o.maxDate === false) {
                valueFromAttr = w.d.input.attr("max");
                if (ISOPattern.test(valueFromAttr)) {
                    o.maxDate = valueFromAttr;
                }
            }
            if (refresh === true) {
                w._t({
                    method: "refresh"
                });
            }
        },
        _dur: function(ms) {
            return [ Math.max(0, Math.floor(ms / (60 * 60 * 1e3 * 24))), Math.max(0, Math.floor(ms / (60 * 60 * 1e3) % 24)), Math.max(0, Math.floor(ms / (60 * 1e3) % 60)), Math.max(0, Math.floor(ms / 1e3 % 60)) ];
        },
        __: function(val) {
            var o = this.options, lang = o.lang[o.useLang], mode = o[o.mode + "lang"], oride = "override" + val.charAt(0).toUpperCase() + val.slice(1);
            if (typeof o[oride] !== "undefined") {
                return o[oride];
            }
            if (typeof lang !== "undefined" && typeof lang[val] !== "undefined") {
                return lang[val];
            }
            if (typeof mode !== "undefined" && typeof mode[val] !== "undefined") {
                return mode[val];
            }
            if (typeof o.lang["default"][val] !== "undefined") {
                return o.lang["default"][val];
            }
            return "Err:NotFound";
        },
        __fmt: function() {
            var w = this, o = this.options;
            if (typeof w.fmtOver !== "undefined" && w.fmtOver !== false) {
                return w.fmtOver;
            }
            switch (o.mode) {
              case "timebox":
              case "timeflipbox":
                return w.__("timeOutput");

              case "durationbox":
              case "durationflipbox":
                return w.__("durationFormat");

              case "datetimebox":
              case "datetimeflipbox":
                return w.__("datetimeFormat");

              default:
                return w.__("dateFormat");
            }
        },
        _zPad: function(number, pad) {
            if (typeof pad !== "undefined" && pad === "-") {
                return String(number);
            }
            return (number < 10 ? "0" : "") + String(number);
        },
        _dRep: function(oper, direction) {
            var ch, i, start = 48, end = 57, adder = 1584, newString = "";
            if (direction === -1) {
                start += adder;
                end += adder;
                adder = -1584;
            }
            for (i = 0; i < oper.length; i++) {
                ch = oper.charCodeAt(i);
                if (ch >= start && ch <= end) {
                    newString = newString + String.fromCharCode(ch + adder);
                } else {
                    newString = newString + String.fromCharCode(ch);
                }
            }
            return newString;
        },
        _doIndic: function() {
            var w = this;
            w.d.intHTML.find("*").each(function() {
                if ($(this).children().length < 1) {
                    $(this).html(w._dRep($(this).html()));
                }
            });
            w.d.intHTML.find("input").each(function() {
                $(this).val(w._dRep($(this).val()));
            });
        },
        _n: function(val, def) {
            return val < 0 ? def : val;
        },
        _pa: function(arr, date) {
            if (typeof date === "boolean") {
                return new this._date(arr[0], arr[1], arr[2], 0, 0, 0, 0);
            }
            return new this._date(date.get(0), date.get(1), date.get(2), arr[0], arr[1], arr[2], 0);
        },
        _btwn: function(value, low, high) {
            return value > low && value < high;
        },
        _grabLabel: function(deflt) {
            var inputPlaceholder, inputTitle, w = this, o = this.options, tmp = false;
            if (typeof o.overrideDialogLabel === "undefined") {
                inputPlaceholder = w.d.input.attr("placeholder");
                inputTitle = w.d.input.attr("title");
                if (typeof inputPlaceholder !== "undefined") {
                    return inputPlaceholder;
                }
                if (typeof inputTitle !== "undefined") {
                    return inputTitle;
                }
                tmp = $(document).find("label[for='" + w.d.input.attr("id") + "']").text();
                return tmp === "" ? deflt : tmp;
            }
            return o.overrideDialogLabel;
        },
        _getFldOrder: function(mode) {
            switch (mode) {
              case "durationbox":
              case "durationflipbox":
                return this.__("durationOrder");

              case "timebox":
              case "timeflipbox":
                return this.__("timeFieldOrder");

              case "datetimebox":
              case "datetimeflipbox":
                return this.__("datetimeFieldOrder");

              default:
                return this.__("dateFieldOrder");
            }
        },
        _t: function(obj) {
            this.d.input.trigger("datebox", obj);
        },
        _prepFunc: function(func) {
            if (func === false || typeof func === "function") {
                return func;
            }
            if (typeof window[func] === "function") {
                return window[func];
            }
            return false;
        },
        _pickRanges: function(dispMonth, dispYear, realYear, relative) {
            var w = this, i, o = this.options, calcYear = relative === false ? realYear : dispYear, startYear = 0, endYear = 0, returnVal = {
                month: [],
                year: []
            };
            for (i = 0; i <= 11; i++) {
                if (i === dispMonth) {
                    returnVal.month.push([ i, w.__("monthsOfYear")[i], true ]);
                } else {
                    returnVal.month.push([ i, w.__("monthsOfYear")[i], false ]);
                }
            }
            if (o.calYearPickMin < 1) {
                startYear = calcYear + o.calYearPickMin;
            } else if (o.calYearPickMin < 1800) {
                startYear = calcYear - o.calYearPickMin;
            } else if (o.calYearPickMin === "NOW") {
                startYear = realYear;
            } else {
                startYear = o.calYearPickMin;
            }
            if (o.calYearPickMax < 1800) {
                endYear = calcYear + o.calYearPickMax;
            } else if (o.calYearPickMax === "NOW") {
                endYear = realYear;
            } else {
                endYear = o.calYearPickMax;
            }
            for (i = startYear; i <= endYear; i++) {
                if (i === dispYear) {
                    returnVal.year.push([ i, i, true ]);
                } else {
                    returnVal.year.push([ i, i, false ]);
                }
            }
            return returnVal;
        },
        _stdSel: function(data, id, cls) {
            var i, returnVal = "<select class='" + cls + "' id='" + id + "'>";
            for (i = 0; i < data.length; i++) {
                returnVal += "<option value='" + data[i][0] + "'" + (data[i][2] === true ? " selected='selected'" : "") + ">" + data[i][1] + "</option>";
            }
            returnVal += "</select>";
            return returnVal;
        },
        _stdBtn: {
            cancel: function() {
                var w = this, o = this.options;
                return $(w.style_btn(o.theme_cancelBtn, w.__("cancelButton"))).on(o.clickEvent, function(e) {
                    e.preventDefault();
                    w._t({
                        method: "close",
                        closeCancel: true
                    });
                });
            },
            clear: function() {
                var w = this, o = this.options;
                return $(w.style_btn(o.theme_clearBtn, w.__("clearButton"))).on(o.clickEvent, function(e) {
                    e.preventDefault();
                    w.d.input.val("");
                    w._t({
                        method: "clear"
                    });
                    w._t({
                        method: "close",
                        closeCancel: true
                    });
                });
            },
            close: function(txt, trigger) {
                var w = this, o = this.options;
                if (typeof trigger === "undefined") {
                    trigger = false;
                }
                return $(w.style_btn(o.theme_closeBtn, txt)).addClass("" + (w.dateOK === true ? "" : "disabled")).on(o.clickEvent, function(e) {
                    e.preventDefault();
                    if (w.dateOK === true) {
                        if (trigger === false) {
                            w._t({
                                method: "set",
                                value: w._formatter(w.__fmt(), w.theDate),
                                date: w.theDate
                            });
                        } else {
                            w._t(trigger);
                        }
                        w._t({
                            method: "close"
                        });
                    }
                });
            },
            today: function() {
                var w = this, o = this.options;
                return $(w.style_btn(o.theme_todayBtn, w.__("todayButtonLabel"))).on(o.clickEvent, function(e) {
                    e.preventDefault();
                    w.theDate = w._pa([ 0, 0, 0 ], new w._date());
                    w._t({
                        method: "doset"
                    });
                    if (o.closeTodayButton !== false) {
                        w._t({
                            method: "close"
                        });
                    }
                });
            },
            tomorrow: function() {
                var w = this, o = this.options;
                return $(w.style_btn(o.theme_tomorrowBtn, w.__("tomorrowButtonLabel"))).on(o.clickEvent, function(e) {
                    e.preventDefault();
                    w.theDate = w._pa([ 0, 0, 0 ], new w._date()).adj(2, 1);
                    w._t({
                        method: "doset"
                    });
                    if (o.closeTomorrowButton !== false) {
                        w._t({
                            method: "close"
                        });
                    }
                });
            }
        },
        _doBottomButtons: function(useSet) {
            var w = this, o = this.options, ctrlContainer, ctrlWrk;
            if (!(o.useSetButton && useSet || o.useTodayButton || o.useTomorrowButton || o.useClearButton || o.useCancelButton)) {
                return "";
            }
            ctrlContainer = w.style_btnGrp(o.useCollapsedBut);
            if (o.useSetButton && useSet) {
                switch (o.mode) {
                  case "timebox":
                  case "timeflipbox":
                    ctrlWrk = w.__("setTimeButtonLabel");
                    break;

                  case "durationbox":
                  case "duartionflipbox":
                    ctrlWrk = w.__("setDurationButtonLabel");
                    break;

                  default:
                    ctrlWrk = w.__("setDateButtonLabel");
                    break;
                }
                w.setBut = w._stdBtn.close.call(w, ctrlWrk);
                w.setBut.appendTo(ctrlContainer);
            }
            if (o.useTodayButton) {
                ctrlContainer.append(w._stdBtn.today.call(w));
            }
            if (o.useTomorrowButton) {
                ctrlContainer.append(w._stdBtn.tomorrow.call(w));
            }
            if (o.useClearButton) {
                ctrlContainer.append(w._stdBtn.clear.call(w));
            }
            if (o.useCancelButton) {
                ctrlContainer.append(w._stdBtn.cancel.call(w));
            }
            if (typeof w.style_btnGrpOut === "function") {
                ctrlContainer = w.style_btnGrpOut(o.useCollapsedBut, ctrlContainer);
            }
            return ctrlContainer;
        },
        close: function() {
            var w = this, o = this.options, basepop = {};
            o.closeCallback = w._prepFunc(o.closeCallback);
            if (o.closeCallback !== false) {
                basepop.afterclose = function() {
                    o.closeCallback.apply(w, [ {
                        initDate: w.initDate,
                        date: w.theDate,
                        duration: w.lastDuration,
                        cancelClose: w.cancelClose
                    } ].concat(o.closeCallbackArgs));
                };
            } else {
                basepop.afterclose = function() {
                    return true;
                };
            }
            switch (o.displayMode) {
              case "blind":
                w.d.mainWrap.slideUp();

              case "inline":
                basepop.afterclose.call();
                return true;

              default:
                $(".jtsage-datebox-backdrop-div").remove();
                w.d.mainWrap.removeClass("db-show");
                basepop.afterclose.call();
                w.d.mainWrap.hide();
                w.d.mainWrap.detach();
                break;
            }
            $(document).off(w.drag.eMove).off(w.drag.eEnd).off(w.drag.eEndA).off("resize" + w.eventNamespace).off("keydown" + w.eventNamespace);
            if (o.useFocus) {
                w.fastReopen = true;
                setTimeout(function(t) {
                    return function() {
                        t.fastReopen = false;
                    };
                }(w), 300);
            }
        },
        _create: function() {
            $(document).trigger("dateboxcreate");
            var w = this, runTmp, ranTmp, o = Object.assign(this.options, this._getLongOptions(this.element), this.element.data("options")), d = {
                input: this.element,
                wrap: this.element.parent(),
                mainWrap: $("<div class='dbContainer_" + this.uuid + "'>").css("zIndex", o.zindex),
                intHTML: false
            }, styleTag = "<style>" + ".dbContainer_" + this.uuid + " { " + "touch-action: none; width: " + o.controlWidth + o.controlWidthImp + "}" + " @media (max-width: " + o.breakpointWidth + ") { " + ".dbContainer_" + this.uuid + " { " + "width: 100% " + o.controlWidthImp + "} } " + (o.theme_headStyle !== false ? o.theme_headStyle : "") + "</style>", evtid = ".datebox" + this.uuid, drag = {
                eStart: "touchstart" + evtid + " mousedown" + evtid,
                eMove: "touchmove" + evtid + " mousemove" + evtid,
                eEnd: "touchend" + evtid + " mouseup" + evtid,
                eEndA: [ "mouseup", "touchend", "touchcancel", "touchmove" ].join(evtid + " ") + evtid,
                move: false,
                start: false,
                end: false,
                pos: false,
                target: false,
                delta: false,
                tmp: false
            };
            $("head").append($(styleTag));
            w.d = d;
            w.drag = drag;
            w.icons = this.icons;
            if (o.usePlaceholder !== false) {
                w.d.input.attr("placeholder", w._grabLabel(typeof o.usePlaceholder === "string" ? o.usePlaceholder : ""));
            }
            w.wheelEvent = o.disableWheel ? "nonsenseEvent" : typeof $.event.special.mousewheel !== "undefined" ? "mousewheel" : "wheel";
            w.firstOfGrid = false;
            w.lastOfGrid = false;
            w.selectedInGrid = false;
            w.skipChange = false;
            w.cancelClose = false;
            w.disabled = false;
            w._date = window.Date;
            w._enhanceDate();
            w.baseID = w.d.input.attr("id");
            w.initDate = new w._date();
            w.initDate.setMilliseconds(0);
            w.theDate = o.defaultValue ? w._makeDate() : w.d.input.val() !== "" ? w._makeDate(w.d.input.val()) : new w._date();
            if (w.d.input.val() === "") {
                w._startOffset(w.theDate);
            }
            w.initDone = false;
            if (o.showInitialValue) {
                w.d.input.val(w._formatter(w.__fmt(), w.theDate));
            }
            w.d.wrap = w.style_inWrap(w.d.input, o.theme_openButton);
            if (o.mode !== false) {
                if (o.buttonIcon === false) {
                    o.buttonIcon = o.mode.substr(0, 4) === "time" || o.mode.substr(0, 3) === "dur" ? o.buttonIconTime : o.buttonIconDate;
                }
            }
            if (o.useButton) {
                $(w.style_inBtn(o.buttonIcon, w.__("tooltip"), o.theme_openButton)).appendTo(w.d.wrap);
                w.d.wrap.on(o.clickEvent, ".dbOpenButton", function(e) {
                    e.preventDefault();
                    if (o.useFocus) {
                        w.d.input.focus();
                    } else {
                        if (!w.disabled) {
                            w._t({
                                method: "open"
                            });
                        }
                    }
                });
            } else {
                w.style_inNoBtn(w.d.wrap);
            }
            if (o.hideInput) {
                w.style_inHide();
            }
            o.runOnBlurCallback = w._prepFunc(o.runOnBlurCallback);
            w.d.input.on("focus.datebox", function() {
                if (w.disabled === false && o.useFocus) {
                    w._t({
                        method: "open"
                    });
                }
            }).on("change.datebox", function() {
                if (w.skipChange) {
                    w.skipChange = false;
                    return true;
                }
                if (o.runOnBlurCallback === false) {
                    if (o.safeEdit === true) {
                        runTmp = w._makeDate(w.d.input.val(), true);
                        if (runTmp[1] === false) {
                            w.theDate = runTmp[0];
                        } else {
                            w.theDate = w.originalDate;
                            w._t({
                                method: "doset"
                            });
                        }
                    } else {
                        w.theDate = w._makeDate(w.d.input.val());
                    }
                } else {
                    runTmp = w._makeDate(w.d.input.val(), true);
                    ranTmp = o.runOnBlurCallback.call(w, {
                        origDate: w.originalDate,
                        input: w.d.input.val(),
                        oldDate: w.theDate,
                        newDate: runTmp[0],
                        isGood: !runTmp[1],
                        isBad: runTmp[1]
                    });
                    if (typeof ranTmp !== "object") {
                        w.theDate = runTmp[0];
                    } else {
                        w.theDate = ranTmp;
                        w._t({
                            method: "doset"
                        });
                    }
                }
                w.originalDate = w.theDate.copy();
                w.refresh();
            }).on("datebox", w._event);
            if (o.lockInput) {
                w.d.input.attr("readonly", "readonly");
            }
            if (w.d.input.is(":disabled")) {
                w.disable();
            }
            w.applyMinMax(false, false);
            if (o.displayMode === "inline" || o.displayMode === "blind") {
                w.open();
            }
            $(document).trigger("dateboxaftercreate");
        },
        _destroy: function() {
            var w = this, o = this.options, button = w.d.wrap.find("dbOpenButton");
            if (o.useButton === true) {
                button.remove();
                w.d.input.unwrap();
            }
            if (o.lockInput) {
                w.d.input.removeAttr("readonly");
            }
            w.d.input.off("datebox").off("focus.datebox").off("blur.datebox").off("change.datebox");
            $(document).off(w.drag.eMove).off(w.drag.eStart).off(w.drag.eEnd).off(w.drag.eEndA).off("resize" + w.eventNamespace);
        },
        disable: function() {
            var w = this;
            w.d.input.attr("disabled", true);
            w.disabled = true;
            w._t({
                method: "disable"
            });
        },
        enable: function() {
            var w = this;
            w.d.input.attr("disabled", false);
            w.disabled = false;
            w._t({
                method: "enable"
            });
        },
        open: function() {
            var w = this, o = this.options, dMode = o.displayMode, basepop = {};
            if (o.useFocus && w.fastReopen === true) {
                w.d.input.blur();
                return false;
            }
            w.theDate = w._makeDate(w.d.input.val());
            w.originalDate = w.theDate.copy();
            if (w.d.input.val() === "") {
                w._startOffset(w.theDate);
            }
            w.d.input.blur();
            if (typeof w._build[o.mode] !== "function") {
                w._build["default"].call(w);
            } else {
                w._build[o.mode].call(w);
            }
            if (typeof w._drag[o.mode] === "function") {
                w._drag[o.mode].call(w);
            }
            w._t({
                method: "refresh"
            });
            if (w.__("useArabicIndic") === true) {
                w._doIndic();
            }
            if (w.d.intHTML.is(":visible")) {
                return false;
            }
            w.d.mainWrap.empty();
            if (o.useHeader) {
                w.d.mainWrap.append($(w.style_mainHead(w.d.headerText, o.theme_headerTheme, o.theme_headerBtn))).find(".dbCloser").on(o.clickEvent, function(e) {
                    e.preventDefault();
                    w._t({
                        method: "close",
                        closeCancel: true
                    });
                });
            }
            w.d.mainWrap.append(w.d.intHTML).css("zIndex", o.zindex);
            w._t({
                method: "postrefresh"
            });
            o.openCallback = w._prepFunc(o.openCallback);
            if (o.openCallback !== false) {
                basepop.afteropen = function() {
                    w._t({
                        method: "postrefresh"
                    });
                    if (o.openCallback.apply(w, [ {
                        initDate: w.initDate,
                        date: w.theDate,
                        duration: w.lastDuration
                    } ].concat(o.openCallbackArgs)) === false) {
                        w._t({
                            method: "close"
                        });
                    }
                };
            } else {
                basepop.afteropen = function() {
                    w._t({
                        method: "postrefresh"
                    });
                };
            }
            o.beforeOpenCallback = w._prepFunc(o.beforeOpenCallback);
            if (o.beforeOpenCallback !== false) {
                if (o.beforeOpenCallback.apply(w, [ {
                    initDate: w.initDate,
                    date: w.theDate,
                    duration: w.lastDuration
                } ].concat(o.beforeOpenCallbackArgs)) === false) {
                    return false;
                }
            }
            switch (o.displayMode) {
              case "inline":
              case "blind":
                if (w.initDone) {
                    if (o.displayMode === "blind") {
                        w.refresh();
                        w.d.mainWrap.slideDown();
                    }
                } else {
                    w.d.mainWrap.insertAfter(w.style_attach(true)).addClass(o.theme_inlineContainer).css({
                        zIndex: "auto",
                        marginRight: o.displayInlinePosition === "right" ? 0 : "auto",
                        marginLeft: o.displayInlinePosition === "left" ? 0 : "auto"
                    });
                    if (o.displayMode === "blind") {
                        w.d.mainWrap.hide();
                    }
                    w.initDone = true;
                }
                w._t({
                    method: "postrefresh"
                });
                break;

              default:
                w.d.mainWrap.show().css("zIndex", o.zindex).appendTo(w.style_attach(false)).addClass(o.theme_modalContainer).one(o.tranDone, function() {
                    if (w.d.mainWrap.is(":visible")) {
                        basepop.afteropen.call();
                    } else {
                        basepop.afterclose.call();
                        w.d.mainWrap.removeClass("db-show");
                    }
                });
                w.d.backdrop = $("<div class='jtsage-datebox-backdrop-div'></div>").css(o.theme_backgroundMask).css("zIndex", o.zindex - 1).appendTo(o.displayMode === "modal" ? w.style_attach(false) : "body").on(o.clickEvent, function(e) {
                    e.preventDefault();
                    if (o.dismissOutsideClick) {
                        w._t({
                            method: "close",
                            closeCancel: true
                        });
                    }
                });
                w.d.mainWrap.css(o.displayMode === "modal" ? w.getModalPosition.call(w) : w.getDropPosition.call(this, o.displayDropdownPosition));
                break;
            }
            if (dMode === "modal" || dMode === "dropdown") {
                $(document).on("resize" + w.eventNamespace, function() {
                    this.d.mainWarp.css(dMode === "modal" ? this.getModalPosition.call(this) : this.getDropPosition.call(this, this.options.displayDropdownPosition));
                }.bind(w));
                if (o.dismissOnEscape) {
                    $(document).on("keydown" + w.eventNamespace, function(e) {
                        var isEscape = false;
                        if ("key" in e) {
                            isEscape = e.key === "Escape" || e.key === "Esc";
                        } else {
                            isEscape = e.keyCode === 27;
                        }
                        if (isEscape) {
                            this._t({
                                method: "close",
                                closeCancel: true
                            });
                        }
                    }.bind(w));
                }
            }
            window.setTimeout(function() {
                w.d.mainWrap.addClass("db-show");
            }, 0);
            window.setTimeout(function() {
                w.d.mainWrap.trigger("oTransitionEnd");
            }, 200);
        },
        getCalStartGrid: function() {
            return this.firstOfGrid;
        },
        getCalEndGrid: function() {
            return this.lastOfGrid;
        },
        isSelectedInCalGrid: function() {
            var w = this;
            if (w.firstOfGrid === false || w.lastOfGrid === false) {
                return false;
            }
            return w.firstOfGrid.comp() <= w.originalDate.comp() && w.originalDate.comp() <= w.lastOfGrid.comp();
        },
        isSelectedInBounds: function() {
            var w = this;
            if (w.firstOfMonth === false || w.lastOfMonth === false) {
                return false;
            }
            return w.firstOfMonth.comp() <= w.originalDate.comp() && w.originalDate.comp() <= w.lastOfMonth.comp();
        },
        isInCalGrid: function(date) {
            var w = this;
            if (w.firstOfGrid === false || w.lastOfGrid === false) {
                return false;
            }
            return w.firstOfGrid.comp() <= date.comp() && date.comp() <= w.lastOfGrid.comp();
        },
        _cal_ThemeDate: function(testDate, dispMonth) {
            var w = this, o = this.options, itt, done = false, returnObject = {
                theme: o.theme_cal_Default,
                inBounds: true
            }, dateThemes = [ [ "selected", "theme_cal_Selected" ], [ "today", "theme_cal_Today" ], [ "highDates", "theme_cal_DateHigh" ], [ "highDatesAlt", "theme_cal_DateHighAlt" ], [ "highDatesRec", "theme_cal_DateHighRec" ], [ "highDays", "theme_cal_DayHigh" ] ];
            w.realToday = new w._date();
            if (testDate.get(1) !== dispMonth) {
                returnObject.inBounds = false;
                if (o.calHighOutOfBounds !== false) {
                    returnObject.theme = o.theme_cal_OutOfBounds;
                    done = true;
                    if (o.calSelectedOutOfBounds !== false && w._ThemeDateCK.selected.call(w, testDate)) {
                        returnObject.theme = o.theme_cal_Selected;
                    }
                }
            }
            for (itt = 0; itt < dateThemes.length && !done; itt++) {
                if (w._ThemeDateCK[dateThemes[itt][0]].call(w, testDate)) {
                    returnObject.theme = o[dateThemes[itt][1]];
                    done = true;
                }
            }
            return returnObject;
        },
        _dbox_run_update: function(shortRun) {
            var w = this, o = this.options, dur = o.mode === "durationbox" ? true : false;
            if (dur) {
                w._getCleanDur();
            }
            if (shortRun !== true && dur !== true) {
                w._check();
                if (o.mode === "datebox" || o.mode === "datetimebox") {
                    w.d.intHTML.find(".dbHeader").childern().first().text(w._formatter(w.__("headerFormat"), w.theDate));
                }
                if (o.useSetButton) {
                    if (w.dateOK === false) {
                        w.setBut.addClass(o.disabledState);
                    } else {
                        w.setBut.removeClass(o.disabledState);
                    }
                }
            }
            w.d.intHTML.find("input").each(function() {
                switch ($(this).data("field")) {
                  case "y":
                    $(this).val(w.theDate.get(0));
                    break;

                  case "m":
                    $(this).val(w.theDate.get(1) + 1);
                    break;

                  case "d":
                    $(this).val(dur ? w.lastDurationA[0] : w.theDate.get(2));
                    break;

                  case "h":
                    if (dur) {
                        $(this).val(w.lastDurationA[1]);
                    } else {
                        if (w.__("timeFormat") === 12) {
                            $(this).val(w.theDate.get12hr());
                        } else {
                            $(this).val(w.theDate.get(3));
                        }
                    }
                    break;

                  case "i":
                    if (dur) {
                        $(this).val(w.lastDurationA[2]);
                    } else {
                        $(this).val(w._zPad(w.theDate.get(4)));
                    }
                    break;

                  case "M":
                    $(this).val(w.__("monthsOfYearShort")[w.theDate.get(1)]);
                    break;

                  case "a":
                    $(this).val(w.__("meridiem")[w.theDate.get(3) > 11 ? 1 : 0]);
                    break;

                  case "s":
                    if (dur) {
                        $(this).val(w.lastDurationA[3]);
                    } else {
                        $(this).val(w._zPad(w.theDate.get(5)));
                    }
                    break;
                }
            });
            if (w.__("useArabicIndic") === true) {
                w._doIndic();
            }
        },
        _dbox_enter: function(item) {
            var tmp, cleanVal = parseInt(item.val(), 10), w = this, t = 0;
            if (item.data("field") === "M") {
                tmp = w.__("monthsOfYearShort").indexOf(item.val());
                if (tmp > -1) {
                    w.theDate.setMonth(tmp);
                }
            }
            if (item.val() !== "" && item.val().toString().search(/^[0-9]+$/) === 0) {
                switch (item.data("field")) {
                  case "y":
                    w.theDate.setD(0, cleanVal);
                    break;

                  case "m":
                    w.theDate.setD(1, cleanVal - 1);
                    break;

                  case "d":
                    w.theDate.setD(2, cleanVal);
                    t += 60 * 60 * 24 * cleanVal;
                    break;

                  case "h":
                    w.theDate.setD(3, cleanVal);
                    t += 60 * 60 * cleanVal;
                    break;

                  case "i":
                    w.theDate.setD(4, cleanVal);
                    t += 60 * cleanVal;
                    break;

                  case "s":
                    w.theDate.setD(5, cleanVal);
                    t += cleanVal;
                    break;
                }
            }
            if (this.options.mode === "durationbox") {
                w.theDate.setTime(w.initDate.getTime() + t * 1e3);
            }
            setTimeout(function() {
                w.refresh();
            }, 150);
        },
        _fbox_do_dur_math: function(term, offset, position) {
            var current, possibleReturn, w = this, multiplier = {
                d: Number.MAX_SAFE_INTEGER,
                h: 24,
                i: 60,
                s: 60
            }[term];
            if (position === 0 && term !== "d") {
                switch (term) {
                  case "h":
                    current = w.lastDurationA[1] + w.lastDurationA[0] * 24;
                    break;

                  case "i":
                    current = w.lastDurationA[2] + w.lastDurationA[1] * 60 + w.lastDurationA[0] * 24 * 60;
                    break;

                  case "s":
                    current = w.lastDuration;
                    break;
                }
            } else {
                current = w.lastDurationA[[ "d", "h", "i", "s" ].indexOf(term)];
                possibleReturn = current + offset;
            }
            if (position === 0) {
                return possibleReturn < 0 ? "&nbsp;" : possibleReturn;
            } else {
                if (possibleReturn < 0) {
                    possibleReturn += multiplier;
                }
                while (possibleReturn > multiplier - 1) {
                    possibleReturn -= multiplier;
                }
                return possibleReturn;
            }
        },
        _fbox_do_roll_math: function(term, offset) {
            var i, w = this, o = this.options, finder = [], current = 0, total = 0, safeOffset = null, testDate;
            switch (term) {
              case "y":
                return w.theDate.get(0) + offset;

              case "m":
                testDate = w.theDate.copy(false, [ 0, 0, 1 ]).adj(1, offset);
                return w.__("monthsOfYearShort")[testDate.get(1)];

              case "d":
                if (o.rolloverMode.d === false) {
                    total = 32 - w.theDate.copy([ 0 ], [ 0, 0, 32, 13 ]).getDate();
                    current = w.theDate.get(3);
                    for (i = 0; i < total; i++) {
                        if (i + current > total) {
                            finder.push(i + current - total);
                        } else {
                            finder.push(i + current);
                        }
                    }
                    safeOffset = offset % total;
                    if (safeOffset < 0) {
                        return finder[finder.length + safeOffset];
                    }
                    return finder[safeOffset];
                }
                return w.theDate.copy([ 0, 0, offset ]).get(2);

              case "h":
                testDate = w.theDate.copy([ 0, 0, 0, offset ]);
                return w.__("timeFormat") === 12 ? testDate.get12hr() : testDate.get(3);

              case "i":
                return w._zPad(w.theDate.copy([ 0, 0, 0, 0, offset * o.minuteStep ]).get(4));

              case "s":
                return w._zPad(w.theDate.copy([ 0, 0, 0, 0, 0, offset ]).get(5));

              case "a":
                if (w.theDate.get(3) > 11) {
                    return w.__("meridiem")[offset % 2 === 0 ? 1 : 0];
                } else {
                    return w.__("meridiem")[offset % 2 === 0 ? 0 : 1];
                }
            }
        },
        _slide_ThemeDate: function(testDate) {
            var w = this, o = this.options, itt, done = false, returnObject = {
                theme: o.theme_slide_Default
            }, dateThemes = [ [ "selected", "theme_slide_Selected" ], [ "today", "theme_slide_Today" ], [ "highDates", "theme_slide_DateHigh" ], [ "highDatesAlt", "theme_slide_DateHighAlt" ], [ "highDatesRec", "theme_slide_DateHighRec" ], [ "highDays", "theme_slide_DayHigh" ] ];
            w.realToday = new w._date();
            for (itt = 0; itt < dateThemes.length && !done; itt++) {
                if (w._ThemeDateCK[dateThemes[itt][0]].call(w, testDate)) {
                    returnObject.theme = o[dateThemes[itt][1]];
                    done = true;
                }
            }
            return returnObject;
        }
    });
})(jQuery);

(function($) {
    $(document).ready(function() {
        $("[data-role='datebox']").each(function() {
            $(this).datebox();
        });
    });
})(jQuery);