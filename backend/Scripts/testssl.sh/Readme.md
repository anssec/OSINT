
## Intro

[![CI tests](https://github.com/testssl/testssl.sh/actions/workflows/unit_tests.yml/badge.svg)](https://github.com/testssl/testssl.sh/actions/workflows/unit_tests.yml)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/testssl/testssl.sh?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![License](https://img.shields.io/github/license/testssl/testssl.sh)](https://github.com/testssl/testssl.sh/LICENSE)
[![Docker](https://img.shields.io/docker/pulls/drwetter/testssl.sh)](https://github.com/testssl/testssl.sh/blob/3.2/Dockerfile.md)


`testssl.sh` is a free command line tool which checks a server's service on
any port for the support of TLS/SSL ciphers, protocols as well as some
cryptographic flaws.

### Key features

* Clear output: you can tell easily whether anything is good or bad.
* Machine readable output (CSV, two JSON formats), also HTML output.
* No need to install or to configure something.  No gems, CPAN, pip or the like.
* Works out of the box: Linux, OSX/Darwin, FreeBSD, NetBSD, MSYS2/Cygwin, WSL (bash on Windows). Only OpenBSD needs bash.
* A Dockerfile is provided, there's also an official container build @ dockerhub and GHCR.
* Flexibility: You can test any SSL/TLS enabled and STARTTLS service, not only web servers at port 443.
* Toolbox: Several command line options help you to run *your* test and configure *your* output.
* Reliability: features are tested thoroughly.
* Privacy: It's only you who sees the result, not a third party.
* Freedom: It's 100% open source. You can look at the code, see what's going on.
* The development is open @ GitHub and participation is welcome.

### License

This software is free. You can use it under the terms of GPLv2, see LICENSE.

Attribution is important for the future of this project -- also in the
internet. Thus if you're offering a scanner based on testssl.sh as a public and/or
paid service in the internet you are strongly encouraged to mention to your audience
that you're using this program and where to get this program from. That helps us
to get bugfixes, other feedback and more contributions.

### Compatibility

Testssl.sh is working on every Linux/BSD distribution out of the box. Latest by 2.9dev
most of the limitations of disabled features from the openssl client are gone
due to bash-socket-based checks. An old OpenSSL-bad version is supplied but
but you can also use any LibreSSL or OpenSSL version.
   testssl.sh also works on other unixoid systems out of the box, supposed they have
`/bin/bash` >= version 3.2 and standard tools like sed and awk installed. An implicit
(silent) check for binaries is done when you start testssl.sh . System V needs probably
to have GNU grep installed. MacOS X and Windows (using MSYS2, Cygwin or WSL) work too.

Update notification here or @ [mastodon](https://infosec.exchange/@testssl) or [bluesky](https://bsky.app/profile/testssl.bsky.social). [twitter](https://twitter.com/drwetter) is not being used anymore.

### Installation

You can download testssl.sh branch 3.2 just by cloning this git repository:

    git clone --depth 1 https://github.com/testssl/testssl.sh.git

3.2 is now the latest stable branch which evolved from 3.1dev. There will be one last bugfix release for the former stable version named old-stable, which will be 3.0.10.
<!--  please help yourself by downloading the [ZIP](https://codeload.github.com/testssl/testssl.sh/zip/v3.0.9) or [tar.gz](https://codeload.github.com/testssl/testssl.sh/tar.gz/v3.0.9) archive. Just ``cd`` to the directory created (=INSTALLDIR) and run it off there. -->

#### Docker

Testssl.sh has minimal requirements. As stated you don't have to install or build anything. You can just run it from the pulled/cloned directory. Still if you don't want to pull the GitHub repo to your directory of choice you can pull a container from dockerhub and run it:

```
docker run --rm -ti  drwetter/testssl.sh <your_cmd_line>
```

or from GHCR (GitHub Container Registry which supports more platforms: linux/amd64, linux/386, linux/arm64, linux/arm/v7, linux/arm/v6, linux/ppc64le):

```
docker run --rm -it ghcr.io/testssl/testssl.sh <your_cmd_line>
```

Or if you have cloned this repo you also can just ``cd`` to the INSTALLDIR and run

```
docker build . -t imagefoo && docker run --rm -t imagefoo example.com
```

For more please consult [Dockerfile.md](https://github.com/testssl/testssl.sh/blob/3.2/Dockerfile.md).

### No Warranty

Usage of the program is without any warranty. Use it at your own risk.

Testssl.sh is intended to be used as a standalone CLI tool. While we tried to apply best practise security measures, we can't guarantee that the program is without any vulnerabilities. Running as a service may pose security risks and you're recommended to apply additional security measures.

### Status

This is the stable release version 3.2. Please use it **now**, as 3.0.x will not get any updates after 3.0.10, with the current manpower we only support n-1 versions. There will be soon a separate 3.3.dev branch where further development takes place before 3.4 becomes the stable version and 3.2 becomes old-stable.

### Documentation

* .. it is there for reading. Please do so :-) -- at least before asking questions. See man page in groff, html and markdown format in `~/doc/`.
* [https://testssl.sh/](https://testssl.sh/) will help to get you started.
* For the (older) version 2.8, Will Hunt provides a longer [description](https://www.4armed.com/blog/doing-your-own-ssl-tls-testing/), including useful background information.

### Contributing

A lot of contributors already helped to push the project where it currently is, see [CREDITS.md](https://github.com/testssl/testssl.sh/blob/3.2/CREDITS.md). Your contributions would be also welcome! There's a [large to-do list](https://github.com/testssl/testssl.sh/issues). To get started look for issues which are labeled as [good first issue](https://github.com/testssl/testssl.sh/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22), [for grabs](https://github.com/testssl/testssl.sh/issues?q=is%3Aissue+is%3Aopen+label%3A%22for+grabs%22) or [help wanted](https://github.com/testssl/testssl.sh/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22). The latter is more advanced, you can also lookout for documentation issues.

It is recommended to read [CONTRIBUTING.md](https://github.com/testssl/testssl.sh/blob/3.2/CONTRIBUTING.md) and please also have a look at he [Coding Convention](https://github.com/testssl/testssl.sh/blob/3.2/Coding_Convention.md). Before you start writing patches with hundreds of lines, better create an issue first.

In general there's also some maintenance burden, like maintaining handshakes and CA stores, writing unit tests, improving github actions. If you believe you can contribute and be responsible to one of those maintenance task, please speak up. That would free resources that we could use for development.


### Bug reports

Bug reports are important. It makes this project more robust.

Please file bugs in the issue tracker @ GitHub. Do not forget to provide detailed information, see template for issue, and further details @
https://github.com/testssl/testssl.sh/wiki/Bug-reporting. Nobody can read your thoughts -- yet. And only agencies your screen ;-)

You can also debug yourself, see [here](https://github.com/testssl/testssl.sh/wiki/Findings-and-HowTo-Fix-them).

----

### External/related projects

Please address questions not specifically to the code of testssl.sh to the respective projects below.

#### Web frontend
* https://github.com/johannesschaefer/webnettools
* https://github.com/TKCERT/testssl.sh-webfrontend

#### Mass scanner w parallel scans and elastic searching the results
* https://github.com/TKCERT/testssl.sh-masscan

#### Privacy checker using testssl.sh
* https://privacyscore.org

#### Nagios / Icinga Plugins
* https://github.com/dnmvisser/nagios-testssl (Python 3)
* https://gitgud.malvager.net/Wazakindjes/icinga2_plugins/src/master/check_testssl.sh (Shell)

#### pentest2xlsx: generate Excel sheets from CSV
* https://github.com/AresS31/pentest2xlsx (python)

#### Brew package

* see [#233](https://github.com/testssl/testssl.sh/issues/233) and
  [https://github.com/Homebrew/homebrew](https://github.com/Homebrew/homebrew)

#### Daemon for batch execution of testssl.sh command files
* https://github.com/bitsofinfo/testssl.sh-processor

#### Daemon for batch processing of testssl.sh JSON result files for sending Slack alerts, reactive copying etc
* https://github.com/bitsofinfo/testssl.sh-alerts

#### GitHub Actions
* https://github.com/marketplace/actions/testssl-sh-scan
