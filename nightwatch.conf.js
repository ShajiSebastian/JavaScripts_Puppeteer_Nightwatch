module.exports = {
    
        "src_folders" : ["nightwatchScripts"], //scripts written in this folder are executed
        "page_objects_path" : ["nightwatch-page-objects"],// POM file name
      
        "webdriver" : {
          "start_process": true,
          "server_path": "node_modules/.bin/chromedriver",
          "port": 9515
        },
      
        "test_settings" : {
          "default" : {
            "desiredCapabilities": {
              "browserName": "chrome"
            }
          }
        }

}