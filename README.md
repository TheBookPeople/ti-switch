# ti-switch
[![Build Status](https://travis-ci.org/TheBookPeople/ti-switch.svg)](https://travis-ci.org/TheBookPeople/ti-switch)

CLI tool for switching configuration files within Titanium App.

## Install
```
sudo npm install ti-switch
```
## Example

To switch to use the dev version of files run the following command.  This needs to be run from the root directory of your titanium application. 

```
ti-switch dev
```

This will the search for any files in the app folder that end with .dev. The file will then be copied to the same location but without the .dev extension. This will overwriting any existing file. 

e.g

./app/fileOne.txt.dev would be coppied to ./app/fileOne.txt

### Full Usage 

```
ti-switch --help

Usage: ti-switch <enviroment> - e.g prod, ppt or dev

Simple CLI to manage configuration files.

Options:

  -h, --help     output usage information
  -v, --version  output the version number
```
