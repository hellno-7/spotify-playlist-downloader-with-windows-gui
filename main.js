// Generated by CoffeeScript 1.10.0
(function() {
  var Colors, DIRECTORY, DL, Downloader, FOLDER, GENERATE, PASSWORD, PLAYLIST, Program, USERNAME, getUserHome;

  require('coffee-script');

  Colors = require('colors');

  Program = require('commander');

  Downloader = require('./lib/downloader');

  getUserHome = (function(_this) {
    return function() {
      if (process.platform === 'win32') {
        return process.env['USERPROFILE'];
      }
      return process.env['HOME'];
    };
  })(this);

  Program.version('0.0.2').option('-u, --username [username]', 'Spotify Playlist Username (required)', null).option('-p, --playlist [playlist]', 'Spotify Playlist (required)', null).option('-d, --directory [directory]', "Directory you want to save the mp3s to, default: " + (getUserHome()) + "/Music", (getUserHome()) + "/Music").option('-f, --folder', "create folder for playlist", null).option('-g, --generate', "generate file for playlist", null).parse(process.argv);

USERNAME = "USERNAME"; //Program.username;

PASSWORD = "PASSWORD"; //Program.password;

  PLAYLIST_USER = Program.username;
  PLAYLIST_LIST = Program.playlist;

  //PLAYLIST = Program.playlist;

  DIRECTORY = Program.directory;

  FOLDER = Program.folder;

  GENERATE = Program.generate;

  if ((PLAYLIST_USER == null) || (PLAYLIST_LIST == null)) {
    console.log('!!! MUST SPECIFY USERNAME & PLAYLIST !!!'.red);
    return Program.outputHelp();
  }

  DL = new Downloader(USERNAME, PASSWORD, "spotify:user:" + PLAYLIST_USER + ":playlist:" + PLAYLIST_LIST, DIRECTORY);

  if (FOLDER) {
	   DL.makeFolder = true;
  }
  if (GENERATE) {
    DL.generatePlaylist = 1;
  }

  DL.run();

}).call(this);

//# sourceMappingURL=main.js.map
