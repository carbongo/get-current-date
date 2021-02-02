
# Get Current Date

## Description
A simple tool that displays the current date using Node.js. The basic functionalities are described below.


```
gcd <COMMAND> [OPTION]

Displays the date

Commands:
  gcd current  Display the current date. It will only show a certain part of the
               date, if there is at least one time-related option. Otherwise,
               the full ISO date will be displayed.
  gcd add      Add amount of time set by options to the current date. At least
               one time-related option is required.
  gcd sub      Subtract amount of time set by options from the current date. At
               least one time-related option is required.

Options:
  -y, --year     Year
  -m, --month    Month
  -d, --date     Date
      --debug    Debug (input logging)
  -h, --help     Show help                                             [boolean]
  -v, --version  Show version number                                   [boolean]

Examples:
  gcd current        Displays the current date
  gcd current -y     Displays the current year
  gcd add -m 4       Calculates the date in four months
  gcd sub -y 1 -m 4  Calculates the date that was one year and four months
                     earlier
```

## Initialisation

Before use:
```bash
npm i
npm link
```

After use:
```bash
npm unlink
```

## Usage

### Examples

```bash
$ gcd current
2021-02-02T20:03:40.978Z
```
```bash
$ gcd current -y
2021
```
```bash
$ gcd add -m 4
2021-06-02T20:04:27.998Z
```
```bash
$ gcd sub -y 1 -m 4
2019-10-02T20:03:04.211Z
```
