=== CC Ontario Income Tax Calculator ===
Contributors: CalculatorsCanada.ca
Donate link: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=WMNEW56HL8NLW
Tags: Ontario, Canada, income tax calculator, calculator, sidebar, widget, plugin, financial, taxes, shortcode
Requires at least: 3.0
Tested up to: 6.5.2
Stable tag: 0.2021.2
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Add a free simple customizable Ontario income tax calculator to your web site. 

== Description ==

This is simple [Ontario income tax calculator](https://calculatorscanada.ca/ontario-income-tax-calculator/) calculates income taxes for residents of Ontario province in Canada for 2021 fiscal year. Latest tax rates can be found [here](https://calculatorscanada.ca/ontario-tax-brackets-rates/).

In case somebody needs here are plugin versions for earlier fiscal years:
* 2020 year - there is no plugin for 2020 Ontario income tax
* 2019 year ([v2019.2](https://plugins.svn.wordpress.org/cc-ontario-tax-calculator/tags/0.2019.2/))
* 2018 year ([v2018.1](https://plugins.svn.wordpress.org/cc-ontario-tax-calculator/tags/0.2018.1/))
* 2017 year ([v2017.1](https://plugins.svn.wordpress.org/cc-ontario-tax-calculator/tags/0.2017.1/))
* 2015 year ([v2015.1](https://plugins.svn.wordpress.org/cc-ontario-tax-calculator/tags/0.2015.1/))
* 2014 year ([v2014.2](https://plugins.svn.wordpress.org/cc-ontario-tax-calculator/tags/0.2014.2/))
* 2013 year ([v2013.2](https://plugins.svn.wordpress.org/cc-ontario-tax-calculator/tags/0.2013.2/))


Calculator is very easy customizable: you can change color of background, borders and text to match your web site's theme and change widget title.

== Installation ==

1. Extract the zip file and just drop the contents in the wp-content/plugins/ directory of your WordPress installation
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Go to Appearance -> Widgets and add the widget to your website sidebar

OR

Use [cc_income_tax_on] short code if you want embed the mortgage calculator into a post instead of adding it as a widget on sidebar.

Short code parameters are:

  * title (optional) - set calculator's title (default - 'Ontario tax calculator')
  * bg_color (optional) - set background color (default - '#ffffff')
  * border_color (optional) - set border color (default - '#cccccc')
  * text_color (optional) - set text color (default - '#000000")
  * dev_credit (optional) - show developer's credit (default - '1') 

Example of shortcode usage: 

[cc_income_tax_on title='Income tax calculator' bg_color='#eaf4d7' border_color='#94c738']

Use [Color Picker](http://www.colorpicker.com/) to get hex code of color you need. 

Please visit [plugin home page](https://calculatorscanada.ca/income-tax-calculator-wordpress-widget/) for more detailed installation and setup instructions

== Frequently Asked Questions ==

= Can I use this widget on commercial website =
Yes. 

Please [contact us](https://calculatorscanada.ca/contact/) if you have further questions or suggestions.


== Screenshots ==

1. Widget settings in appearance panel
2. Widget example on the sidebar
3. Shortcode usage example in post
4. Widget example in WP post/page

== Changelog ==

= 0.2021.2 =
* Fixed low level vulnerability 
* Deprecated PHP function fix (create_function() deprecated)

= 0.2021.1 =
* Income tax calculator updated for fiscal year 2021

= 0.2019.2 =
* Income tax calculator updated for fiscal year 2019

= 0.2018.1 =
* Income tax calculator updated for fiscal year 2018

= 0.2017.1 =
* Income tax calculator updated for fiscal year 2017

= 0.2015.1 =
* Income tax calculator updated for fiscal year 2015
* Shortcode implemented and calculator can be placed in any post or page on blog.

= 0.2014.2 =
* Fixed minor bug for fiscal year 2014

= 0.2014.1 =
* Income tax calculator updated for fiscal year 2014

= 0.2013.2 =
* Fixed minor bug (Undefined variable)

= 0.2013.1 =
* Initial beta release for fiscal year 2013

== Upgrade Notice ==

= 0.2021.2 =
* Fixed low level vulnerability. Immediate update advised.  
* Deprecated PHP function fix (create_function() deprecated)