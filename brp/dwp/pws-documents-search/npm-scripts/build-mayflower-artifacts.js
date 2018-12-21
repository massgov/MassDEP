/**
 * `npm run build-mayflower-artifacts` to execute this script.
 * Creates directories within the src/assets directory and copies Mayflower assets to the corresponding directories.
 * Before running this script you should run `composer install` to install the necessary Mayflower assets.
 */

const path = require('path');
const shell = require('shelljs');

let directories = [
    path.join('src', 'assets'),
    path.join('src', 'assets' ,'mayflower-artifacts'),
    path.join('src', 'assets' ,'mayflower-artifacts', 'css'),
    path.join('src', 'assets' ,'mayflower-artifacts', 'fonts'),
    path.join('src', 'assets' ,'mayflower-artifacts', 'images'),
    path.join('src', 'assets' ,'mayflower-artifacts', 'js')
];

for (let i = 0; i < directories.length; i++) {
  if (!shell.test('-e', directories[i])) {
    console.log('creating directory ' + directories[i]);
    shell.mkdir(directories[i]);
  }
}

if (!shell.test('-e', path.join('libraries', 'mayflower-artifacts', 'assets'))) {
    console.log('Run `composer install` to install mayflower-artifacts.');
} else {
    let cpPath = path.join('src', 'assets', 'mayflower-artifacts');
    console.log('copying files to ' + cpPath);

    shell.cp('-R', path.join('libraries', 'mayflower-artifacts', 'assets', 'css', '*'), path.join('src', 'assets', 'mayflower-artifacts', 'css'));
    shell.cp('-R', path.join('libraries', 'mayflower-artifacts', 'assets', 'fonts', '*'), path.join('src', 'assets', 'mayflower-artifacts', 'fonts'));
    shell.cp('-R', path.join('libraries', 'mayflower-artifacts', 'assets', 'images', '*'), path.join('src', 'assets', 'mayflower-artifacts', 'images'));
    shell.cp('-R', path.join('libraries', 'mayflower-artifacts', 'assets', 'js', '*'), path.join('src', 'assets', 'mayflower-artifacts', 'js'));
}
