const { exec } = require("child_process");
const testSSlSchema = require("../models/testsslSchema");
const Response = require("../utils/Response");

exports.testsslRun = async (req, res) => {
  try {
    const scopeURL = req.params.id;
    const command = `testssl.sh && ./testssl.sh --quiet https://${scopeURL}`;

    // Path: Go to the testssl.sh folder inside WSL before running
    const workingDirectory = "/home/anshul/testssl/testssl.sh";
    // replace <your-username> with your Ubuntu username

    exec(
      command,
      { cwd: workingDirectory, maxBuffer: 1024 * 1000 },
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Error running testssl: ${error.message}`);
          return Response(res, false, "Failed to run testssl", 500);
        }

        if (stderr) {
          console.error(`stderr: ${stderr}`);
        }

        Response(res, true, "TestSSL output fetched successfully", 200, stdout);
      }
    );
  } catch (error) {
    console.log(error.message);
    Response(res, false, "Internal server error Try Again", 500);
    return;
  }
};
