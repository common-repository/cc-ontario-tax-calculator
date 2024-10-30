var $J = jQuery.noConflict();

jQuery(document).ready(function ($J) {
    // runtime events

    $J(".ontario-income").keydown(function (event) {
        if (!(isIntegerKey(event))) event.preventDefault();
    });

    $J(".ontario-income").keyup(function () {
        calculate_income_tax_on(get_id(this.id,"income"));
    });

    function get_id(long_id,fieldname)
    {
        return long_id.substr(0, long_id.lastIndexOf(fieldname) - 1);
    };


    function calculate_income_tax_on(id) {
        var income_id = '#' + id + '-' + 'income';
        var income = parseFloat($J(income_id).val());
        var currency = '$';

        // clear output
        $J('#' + id + '-' + 'ProvincialTax').html("");
        $J('#' + id + '-' + 'FederalTax').html("");
        $J('#' + id + '-' + 'TotalTax').html("");
        $J('#' + id + '-' + 'AverageRate').html("");
        $J('#' + id + '-' + 'AfterTaxIncome').html("");

        // if no data entered
        if (isNaN(income) || income == "") return;

        // calculate ON provincial taxes 2021
        ProvincialTax = 0;
        tmpIncome = income;
        if (tmpIncome > 220000) {
            ProvincialTax += (tmpIncome - 220000) * 20.53 / 100;
            tmpIncome = 220000;
        }
        if (tmpIncome > 150000) {
            ProvincialTax += (tmpIncome - 150000) * 18.97 / 100;
            tmpIncome = 150000;
        }
        if (tmpIncome > 93657) {
            ProvincialTax += (tmpIncome - 93657) * 17.41 / 100;
            tmpIncome = 93657;
        }
        if (tmpIncome > 90287) {
            ProvincialTax += (tmpIncome - 90287) * 13.39 / 100;
            tmpIncome = 90287;
        }
        if (tmpIncome > 79500) {
            ProvincialTax += (tmpIncome - 79500) * 10.98 / 100;
            tmpIncome = 79500;
        }
        if (tmpIncome > 45142) {
            ProvincialTax += (tmpIncome - 45142) * 9.15 / 100;
            tmpIncome = 45142;
        }
        if (tmpIncome > 20821) {
            ProvincialTax += (tmpIncome - 20821) * 5.05 / 100;
            tmpIncome = 20821;
        }
        if (tmpIncome > 15850) {
            ProvincialTax += (tmpIncome - 15850) * 10.10 / 100;
        }
		
        // calculate Canadian federal taxes 2021
        FederalTax = 0;
        tmpIncome = income;
        if (tmpIncome > 216512) {
            FederalTax += (tmpIncome - 216512) * 33 / 100;
            tmpIncome = 216512;
        }
        if (tmpIncome > 151979) {
            FederalTax += (tmpIncome - 151979) * 29 / 100;
            tmpIncome = 151979;
        }
        if (tmpIncome > 98040) {
            FederalTax += (tmpIncome - 98040) * 26 / 100;
            tmpIncome = 98040;
        }
        if (tmpIncome > 49020) {
            FederalTax += (tmpIncome - 49020) * 20.5 / 100;
            tmpIncome = 47630;
        }
        if (tmpIncome > 13808) {
            FederalTax += (tmpIncome - 13808) * 15 / 100;
        }

        TotalTax = ProvincialTax + FederalTax;
        AverageRate = TotalTax / income * 100;
        if (isNaN(AverageRate)) AverageRate = 0;
        AfterTaxIncome = income - TotalTax;

        $J('#' + id + '-' + 'ProvincialTax').html(currency + formatNumber(round2TwoDecimals(ProvincialTax)).toString());
        $J('#' + id + '-' + 'FederalTax').html(currency + formatNumber(round2TwoDecimals(FederalTax)).toString());
        $J('#' + id + '-' + 'TotalTax').html(currency + formatNumber(round2TwoDecimals(TotalTax)).toString());
        $J('#' + id + '-' + 'AverageRate').html(round2TwoDecimals(AverageRate).toString() + '%');
        $J('#' + id + '-' + 'AfterTaxIncome').html(currency + formatNumber(round2TwoDecimals(AfterTaxIncome)).toString());

    };

});


function isIntegerKey(evt) {
    var key = evt.which || evt.which || event.keyCode;
    // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
    var isInteger = (key == 8 ||
        key == 9 ||
        key == 46 ||
        (key >= 35 && key <= 40) ||
        (key >= 48 && key <= 57) ||
        (key >= 96 && key <= 105));
    return isInteger;

};

function isDecimalKey(e, number) {
    var key = (e.which) ? e.which : e.keyCode;
    // numbers (48-57 and 96-105), dot (110,190), comma (44,188), backspace(8), tab (9), navigation keys (35-40), DEL(46)
    if ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || key == 110 || key == 190 || key == 8 || key == 9 || (35 <= key && key <= 40) || key == 46) {
        if (key == 110 || key == 190) {
            // skip it if comma or decimal point already entered or it is empty field yet
            if (number.indexOf(".") > -1 || number.indexOf(",") > -1 || number.length == 0)
                return false;
        }
        return true;
    }

    return false;
};

function radioValue(element) {
    var returnValue = "";
    var radios = document.getElementsByName(element);

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            returnValue = radios[i].value;
        }
    }
    return returnValue;
};

function round2TwoDecimals(number) {
    return Math.round(number * 100) / 100
};

function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}