/**
* @preserve
* RollineYearView Calendar v1.0
* 
*
* Use RollingYearView.css for basic styling.
* jQuery UI is used for selecting multiple dates
*
* Copyright (c) 2013 Hari Hara Chandan G
* Date: Wed Jun 26 20:10:35 2013 
*
*/
 
(function ($) {
 
    $.fn.RollingYearView = function (options) {
 
        var selectedDates = new Array();
        var unselectedDates = new Array();
        // Establish our default settings
        var settings = $.extend({
            noOfMonths: 12,
            offset: 0,
            selectionstop: null
        }, options);
 
        var noCalendarTable = '<div class="columns">';
        var endDiv = '</div>';
        for (var i = 0; i < settings.noOfMonths; i++) {
            var currentDate = Date.today().addMonths(i);
            var calendarTable = calendar(currentDate, i);
            noCalendarTable += calendarTable;
        }
 
        noCalendarTable += endDiv;
        //debugger;
        return this.append(noCalendarTable)
        .bind("mousedown", function (event, ui) { event.metaKey = event.ctrlKey = true; })
        .selectable({ filter: '.selectabledays',
 
            selected: function (event, ui) {
 
                //debugger;
                selectedDates.push(ui.selected.id);
            },
 
            unselected: function (event, ui) {
                unselectedDates.push(ui.unselected.id);
            },
 
            start: function (event, ui) {
                if ($.isFunction(settings.start)) {
                    settings.start.call(this, event, ui);
                }
            },
 
            stop: function (event, ui) {
 
                if ($.isFunction(settings.selectionstop)) {
                    settings.selectionstop.call(this, event, ui, selectedDates, unselectedDates);
                    selectedDates.length = 0;
                    unselectedDates.length = 0;
                }
            }
 
        });
 
    }
 
 
 
 
 
} (jQuery));
 
function calendar(current, iteration) {
 
    //Variables to be used later.  Place holders right now.
    var padding = "";
    var totalFeb = "";
    var i = 1;
    var testing = "";
 
    var month = current.getMonth();
    var day = current.getDate();
    var year = current.getFullYear();
    var tempMonth = month; //+1; //Used to match up the current month with the correct start date.
    var prevMonth = month - 1;
 
    //Determing if Feb has 28 or 29 days in it.  
    if (month == 1) {
        if ((year % 100 != 0) && (year % 4 == 0) || (year % 400 == 0)) {
            totalFeb = 29;
        } else {
            totalFeb = 28;
        }
    }
 
    //////////////////////////////////////////
    // Setting up arrays for the name of 	//
    // the	months, days, and the number of	//
    // days in the month.			//
    //////////////////////////////////////////
 
    var monthNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var dayNames = ["Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday", "Sunday"];
    var totalDays = ["31", "" + totalFeb + "", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"]
 
    //////////////////////////////////////////
    // Temp values to get the number of days//
    // in current month, and previous month.//
    // Also getting the day of the week.	//
    //////////////////////////////////////////
    //var tempDate = new Date(tempMonth + ' 1 ,' + year);
    var tempDate1 = new Date(year, month, 1);
    //var tempDate1 = current;
    var tempweekday = tempDate1.getDay();
    //var tempweekday = tempDate.getDay();
    if (tempweekday == 0) {
        tempweekday = 7;
    }
    var tempweekday2 = tempweekday
    var dayAmount = totalDays[month];
 
    // var preAmount = totalDays[prevMonth] - tempweekday + 1;	
 
    //////////////////////////////////////////////////
    // After getting the first day of the week for	//
    // the month, padding the other days for that	//
    // week with the previous months days.  IE, if	//
    // the first day of the week is on a Thursday,	//
    // then this fills in Sun - Wed with the last	//
    // months dates, counting down from the last	//
    // day on Wed, until Sunday.			//
    //////////////////////////////////////////////////
    
    while (tempweekday > 1) {
        padding += "<td class='nonselectabledays'></td>";
        //preAmount++;
        tempweekday--;
    }
    //////////////////////////////////////////////////
    // Filling in the calendar with the current 	//
    // month days in the correct location along.	//
    //////////////////////////////////////////////////
 
    while (i <= dayAmount) {
 
        //////////////////////////////////////////
        // Determining when to start a new row	//
        //////////////////////////////////////////
 
        if (tempweekday2 > 7) {
            
            tempweekday2 = 1;
            padding += "</tr></tbody><tbody><tr class='borderone'>";
        }
 
        //////////////////////////////////////////////////////////////////////////////////////////////////
        // checking to see if i is equal to the current day, if so then we are making the color of	//
        //that cell a different color using CSS.  Also adding a rollover effect to highlight the 	//
        //day the user rolls over. This loop creates the acutal calendar that is displayed.		//
        //////////////////////////////////////////////////////////////////////////////////////////////////
 
        var renderingDate = new Date(year, month, i);
        
        //////////////////////////////////////////////////////////////////////////////////////////////////
        //To highlight the current date uncomment the below lines//
        //////////////////////////////////////////////////////////////////////////////////////////////////
        //var todayDate = Date.today();
        //if (renderingDate == todayDate) {
        //padding += "<td class='selectabledays currentdate' id='" + renderingDate + "'>" + i + "</td>";
        //} else {
        var currentDate = new Date();
 
        var currentModifiedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 00, 00, 00);
 
        if (renderingDate < currentModifiedDate) {
            padding += "<td class='nonselectabledays' id='" + renderingDate + "'>" + i + "</td>";
        }
        else {
            padding += "<td class='selectabledays' id='" + renderingDate + "'>" + i + "</td>";
        }
 
        //}
 
        tempweekday2++;
        i++;
    }
 
 
    /////////////////////////////////////////
    // Ouptputing the calendar onto the	//
    // site.  Also, putting in the month	//
    // name and days of the week.		//
    /////////////////////////////////////////
    var columnDiv = "<div>";
    //   var columnDiv = "<div class='";
    //    if (iteration % 3 == 1) {
    //        columnDiv += "left'>";
    //    }
    //    else if (iteration % 3 == 2) {
    //        columnDiv += "center'>";
    //    }
    //    else if (iteration % 3 == 0) {
    //        columnDiv += "left'>";
    //    }
   
    var calendarTable = columnDiv;
    calendarTable += "<table class='centeralign' border='1'> <tr class='borderone'><th colspan='7'>" + monthNames[month] + " " + year + "</th></tr>";
    calendarTable += "<tr class='borderone'> <td class='weekName'>Mo</td> <td class='weekName'>Tu</td> <td class='weekName'>We</td> <td class='weekName'>Th</td> <td class='weekName'>Fr</td> <td class='weekName'>Sa</td> <td class='weekName'>Su</td></tr>";
    //calendarTable += "<tr class='borderone'> <td class='borderone'>Mo</td> <td class='borderone'>Tu</td> <td class='borderone'>We</td> <td class='borderone'>Th</td> <td class='borderone'>Fr</td> <td class='borderone'>Sa</td> <td class='borderone'>Su</td></tr>";
    calendarTable += "<tbody><tr class='borderone'>";
 
    calendarTable += padding;
    calendarTable += "</tr></table></div>";
    //            document.getElementById("calendar").innerHTML = calendarTable;
    return calendarTable;
 
}
