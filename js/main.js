require.config({
    paths : {
        'text' : '../bower_components/requirejs-text/text',
        'jquery' : '../bower_components/jquery/dist/jquery.min'
    }
});

require(['jquery', 'text!../data/games.json'], function ($, games) {
    $(function () {
        window.console.log(JSON.parse(games));
    });
});