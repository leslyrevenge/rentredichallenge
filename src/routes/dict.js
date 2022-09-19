const dict = {
  auth: [
    {
      file: "users",
      prefix: "users",
    },
  ],
};
exports.dict = dict;

/*
  // folder name. for example const folder = require("./folder/...")
  sample: [
    {
      // file name. for example const file = require("./folder/file_name")
      file: "file_name", // name of the file that is being fetched. ,
      type: "example: localhost.com/api/.. - internal apis, ",
      // api name. "example: localhost.com/api/api_prefix - internal apis, "
      prefix: "api_prefix", // default to file name
    },
  ],
  */
