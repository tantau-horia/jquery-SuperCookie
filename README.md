#jQuery-SuperCookie

A simple, jQuery plugin for reading, writing and deleting JSON values stored in cookies.

Quick Usage:

- create - create cookie

- check - check existance

- verify - verify cookie value if JSON

- check_index - verify if index exists in JSON

- read_values - read cookie values as string

- read_indexes - read cookie indexes as an array

- read_JSON - read cookie value as JSON object

- read_value - read value of index stored in JSON object

- replace_value - replace value from a specified index stored in JSON object

- remove_value - remove value and index stored in JSON object

![My image](https://raw.github.com/tantau-horia/jquery-SuperCookie/master/example/screen.png)

## Getting Started

Download the [minified version][min] or the [development version][max].

[min]: https://raw.github.com/tantau-horia/jquery-SuperCookie/master/jquery.SuperCookie.min.js
[max]: https://raw.github.com/tantau-horia/jquery-SuperCookie/master/jquery.SuperCookie.js

### Installation

    <script src="/path/to/lib/jquery-min.1.8.2.js"></script>
    <script src="/path/to/lib/jquery.cookie.js"></script>
    <script src="/path/to/lib/json3.min.js"></script>
    <script src="/path/to/jquery.SuperCookie.min.js"></script>

### Dependencies

1. [jquey.cookie][jquery.cookie] - by Klaus Hartl

[jquery.cookie]: https://github.com/carhartl/jquery-cookie

2. [json3][json3] - by Kit Cambridge

[json3]: https://github.com/bestiejs/json3

## Usage

### Create Cookie

    // cookie name: name_of_the_cookie
    // cookie values: {name_field_1:"value1",name_field_2:"value2",name_field_3:"value3"}
    $.super_cookie().create("name_of_the_cookie",{name_field_1:"value1",name_field_2:"value2"});

### Set Cookie Options

See [jquey.cookie][cookie_options] official page for more options.

    // cookie options: {expires: 7,path: "/"}
    $.super_cookie({expires: 7,path: "/"}).create("name_of_the_cookie",{name_field_1:"value1",name_field_2:"value2"});

[cookie_options]: https://github.com/carhartl/jquery-cookie#cookie-options

### Check if cookie exists

    // console.log($.super_cookie().check("name_of_the_cookie"));
    $.super_cookie().check("name_of_the_cookie");


### Check if cookie value is a valid JSON

    // console.log($.super_cookie().verify("name_of_the_cookie"));
    $.super_cookie().verify("name_of_the_cookie");


### Check if index exists in JSON cookie

    // console.log($.super_cookie().check_index("name_of_the_cookie","value1"));
    $.super_cookie().check_index("name_of_the_cookie","value1");

### Read cookie values as string

    // console.log($.super_cookie().read_values("name_of_the_cookie"));
    $.super_cookie().read_values("name_of_the_cookie");

### Read JSON indexes as an array

    // console.log($.super_cookie().read_indexes("name_of_the_cookie"));
    $.super_cookie().read_indexes("name_of_the_cookie");

### Read cookie values as JSON object

    // console.log($.super_cookie().read_JSON("name_of_the_cookie"));
    $.super_cookie().read_JSON("name_of_the_cookie");

### Read a single value from the stored JSON

    // $.super_cookie().create("name_of_the_cookie",{name_field_1:"value1",name_field_2:"value2"});
    // console.log($.super_cookie().read_value("name_of_the_cookie","name_field_1"));
    $.super_cookie().read_value("name_of_the_cookie","name_of_the_index");

### Replace a value from the stored JSON

    // $.super_cookie().create("name_of_the_cookie",{name_field_1:"value1",name_field_2:"value2"});
    // console.log($.super_cookie().replace_value("name_of_the_cookie","name_field_1","new_value"));
    $.super_cookie().replace_value("name_of_the_cookie","name_of_the_index","new_value");


### Add a value to the stored JSON

    // $.super_cookie().create("name_of_the_cookie",{name_field_1:"value1",name_field_2:"value2"});
    // console.log($.super_cookie().add_value("name_of_the_cookie","name_field_3","value3"));
    $.super_cookie().add_value("name_of_the_cookie","name_field_3","value3");


### Remove  a value from the stored JSON

    // $.super_cookie().create("name_of_the_cookie",{name_field_1:"value1",name_field_2:"value2"});
    // console.log($.super_cookie().remove_value("name_of_the_cookie","name_field_1"));
    $.super_cookie().remove_value("name_of_the_cookie","name_field_1"));

## Development

- Source hosted at [GitHub](https://github.com/tantau-horia/jquery-SuperCookie)
- Report issues, questions, feature requests on [GitHub Issues](https://github.com/tantau-horia/jquery-SuperCookie/issues)

## Authors

- jquery.SuperCookie - [Tantau Horia](https://github.com/tantau-horia/)

- jquey.cookie - [Klaus Hartl](https://github.com/carhartl/jquery-cookie)

- json3 - [Kit Cambridge](https://github.com/bestiejs/json3)