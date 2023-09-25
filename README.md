# Deploy Shinylive R App on Github Pages

This repo provides a step-by-step guide for deploying an R Shinylive app to Github Pages. For deploying a Python Shinylive app to Github Actions check this [tutorial](https://github.com/RamiKrispin/shinylive).

<img src="images/shinylive-app.gif" width="100%" align="center"/></a>


## Table of Content
- [Introduction](https://github.com/RamiKrispin/shinylive-r#introduction)
- [Prerequisites](https://github.com/RamiKrispin/shinylive-r#prerequisites)
- [Render the Shiny App](https://github.com/RamiKrispin/shinylive-r#render-the-shiny-app)
- [Deploy App on Github Pages](https://github.com/RamiKrispin/shinylive-r#deploy-app-on-github-pages)
- [Resources](https://github.com/RamiKrispin/shinylive-r#resources)
- [License](https://github.com/RamiKrispin/shinylive-r#license)

## Introduction

Shinylive is a serverless version of Shiny, which enables running Shiny applications in a web browser without needing a backend server. It was first introduced for Python during Posit Conf 2022 using WebAssembly and Pyodide, and its R version during the Posit Conf 2023 using WebR. 


<figure>
<img src="images/shinylive-webr.png" width="100%" align="center"/></a>
<figcaption> Figure 1 - Shinylive archticture, source: Joe Cheng "Running Shiny without a server"  </figcaption>
</figure>

<br>


Currently, there are three methods (or formats) to use Shinylive applications:
- Render a Shiny app into HTML static file using the shinylive package
- Host a Shiny app in Fiddle - a built-in web application to run Shiny R and Python applications
- Embed Shiny app in Quarto documentation using the quarto-shinylive extension for Quarto

In this tutorial, we will focus on the first option above, using the [shinylive](https://github.com/posit-dev/r-shinylive) package to render the app into an HTML file and deploy it as a static website to Github Pages. We will use the Forecasting Sandbox with a Shiny app to demonstrate the deployment process. The app provides a sandbox for three simple forecasting models - Linear regression, ARIMA, and Holt-Winters, enabling the user to modify the model's parameters and explore the change in the output interactively.


Before getting started, just a few words of caution - as of Sep 2023, Shinylive R is in an early and experimental stage. Therefore, some parts of this tutorial may not be applicable or executable in the near future. Please submit an issue if you find anything that does not work or changed.

## Prerequisites

Generally, the main requirements to render the Shiny app into an HTML file and deploy it to a Github Pages are:
A Shiny app (follow the app.R file format)
The shinylive R package (dev version
The httpuv R package (dev version)
A Github repository to host the app as a website
We will install both the shinylive and httpuv packages with the pak package:

```r
# install.packages("pak")
pak::pak("posit-dev/r-shinylive")
pak::pak("rstudio/httpuv")

```
Those are the package versions used in this tutorial:
```r
 packageVersion("shinylive")
[1] ‘0.1.0’

packageVersion("httpuv")
[1] ‘1.6.11.9000’
```

**Note:** If you use VScode, the repository contains the Dev Containers settings for running this tutorial inside a dockerized environment.

## Render the Shiny App

Once the above prerequisites are set, it is straightforward to deploy the app on Github Pages. First, let's render the app into an HTML file using the export function (per the shinylive package documentation):

```r
shinylive::export(app_dir = "myapp", output_dir = "docs")
```

The `app_dir` argument defines the app folder (in this case, under the myapp folder). The `output_dir` argument defines the output of the rendered site (in this case, defined as **docs**). 

The function will render the app into a website structure, setting the **index.html** file and its assets into the `docs` folder.



Why `docs`? We set the `output_dir` argument to `docs` as the Github Pages' setting required the website files to either be in the repository root folder or the docs folder. The latter, having the site under a folder, is a cleaner option than having it under the root folder.

You should expect to have under the `docs` folder the `edit` and `shinylive` folders: 

```shell
.
└── docs
    ├── edit
    └── shinylive

```

You can check if the rendering process was successful using the `runStaticServer` function from the httpuv package:

```r
httpuv::runStaticServer("docs/", port=8008)
```

**Note:** Currently, the runStaticServer function is not available on the latest CRAN version of the package but on the dev version.

Alternatively, you can test that your code works as expected on the browser using the Shinylive [code editor](https://shinylive.io/r/editor/#code=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-ZxzUpnOp1c5p90+nPPefwb5-zd0HkTHNjJ0oXz305EXdDbeekHSWvpIUY1C8l48Xy8pgsv8Vz-xgjyMjNW1GsTADAB+3Bn5sAuWo8Vp6m4OjEB-Z8vAe4RB1AQE9xtHIZOdVRncppngwBEBsCAGAoDeH2QVvazmNizZo2ODAanVoOhUFgcEhDaAAB8AB89LQWjo9fW90GSjXLukI8tdxKE0Ep3SSwJPDqWHqpdm1GZ6CwXrZYN2BlbuV3p1GZZzj2FK2Rti6R8PaitmAU-DpTKEbIlg045Ryi3nVzC4MVTLkrIeGmYHBsbxrUAbHh0tsL6Gjo9frGVneNcaI0+43T+HuRGdbYZkLpzMtZITc9I9w003Hm7fm4t5bq31sgXh2oHbAy9skAO6HI7OoTtna2dd27hL7vjq2Y5aA8B2DxoIFsx5KYeTNJyc1wohjZRRme6951H241faTYS9dv3-uZqB8enNCVQdOgLRDyX2doflpZwjpLuJnstFSI857zvaAAGpaBMREzw2gAAqCwBAjVu4ys94wqoM-InL9niYBe-sl7LxXm+j5BwzGHF2LCe45No97YUEjinbaVbbN368o48wE4956EQ4EwLOqHeYFPdjwKy4mGb+AAFUXRrgBioP-vt1B73SHwHtLw8g6ZeemPRbKo3rUDD4pSe1AS7nx6BTaaQsQAc-DsCacvAII0WUYC+YERqKqFAKW+eiAEAgQqoXyi+MA0u8+G+5ekBogzqC2JUiB4BGBIgWyeeTEHwiA2BkguBMAEBuGhBr+KBuIfmH+7oX+VmP+f+W2ABUWjaSB7ey8JOhK5g5yzAC2MeNuFBL2kakgYqXBz2nOOImeghTAwhrKohC+XuEhskGwTGRW96zGNuYBlBsh7+UYDBRO0BYEwKAAfrQBgBsEcr8kgcABsBMKqBoLGM8Fbp8voVsuPgeBITWAALp0HBRTaxYTDy7SiK60ArZrazCq5bbq50ZtJrgxSa4rK9iPRaGDQCbLZwCqh2E6iqF26XY3YR6SKm6ururm5Iqehr5qF77vYH4-bH7JrEpn4A7tHA4fRR4tZ35XpnSP7P6bZOZv5mYmGAaBikC0LwZmDZJ1gVDgRvZhEsCTEvC+4bp4oOgTSZbfLiGors71hDI6hzS267EGD7HRjdHg4AJmbzFMoO7PBUYrFbjbHmDiG2gbBp4BAaH55CRlIAYBBXDPAq627v4AmGophbEr5vGbIbDHGfFMBSGMHZLPDzRQmvYbA352KOqvFrJAInD7jUBMTmAADsxJYgwimCpA+860PIxgmCY68AGAiGOoXmeC+Cj0JU1cOCbJj0ViKo-yOQnAIKYgjgdIQJIKpA4EdgGwxAg0PI2YdgAAHLlJ0R6N4t7DyF+nKs+gwFEOEpgpII4FuhCTwC8acZIbCTgXUWcVPA4GTmfFsSaRAGaWZIilsdXrXmKpaeQRCVaeXunm6TgWiXtGKlPIaT6A6FYpwLunfJZCNEnieBsIUH4ChAWLaYhPuAZjOBgC4j8jWiGrQABEBpKAkKICCO7s9OQJINKKsKENqGPFWS-qgugj6pKZIB8eqhUPuDZgAJoyA2bbDvy6Av7zHtlsSyn7gKm-H5iinrRjyJjzTCaKkAYwCNmvBCjahtxpAGBNmdnSi3FJkEBcAOyWrdIsnxaIpdlJqSnSnjn4koRTkqkwSznMQykrobQYDLl1izk27zTWntm0CYlZ7Egyn3mByEkklknCLniaFUkOhbk14gQiQCg-kokOj-kYnoX+kBCgWDTngim1QwWKxwXCSaF5HwViKoV-nl7omAVYUmq164UOj4VrREWnCYkIXkXCQAaGj-rYhjF0AADCZy5ANgPATKvg0ySgbw4lBIqAzwcIDocISZbSfOrScyJQoIYAXa-hQAA).

## Deploy App on Github Pages

Before deploying the app to Github Pages, commit and push the changes (e.g., the rendered website). You can verify on the Github repository that you have the docs folder.


Last but not least, we will set up the Github Pages website. On the repository main menu, go to settings (pink rectangle on the screenshot below), select the Pages option (blue rectangle), and select the branch you want to use and the folder website files are located. In this case, we will select the `docs` folder (yellow rectangle). Once you complete those steps, you should get the link for the Github Pages website (brown rectangle). It might take a few minutes until the website is ready and accessible.
<figure>
<img src="images/shinylive-github-pages.png" width="100%" align="center"/></a>
<figcaption> Figure 2 - Deploying the Shiny app on the Github Pages website  </figcaption>
</figure>

<br>
That's it! The website is now ready!

https://ramikrispin.github.io/shinylive-r/

## Resources
- Joe Cheng's **Running Shiny without a server** [presentation](https://jcheng5.github.io/posit-conf-2023-shinylive/#/title-slide) at the Posit Conf 2023
- Shinylive [R](https://github.com/posit-dev/r-shinylive) and [Python](https://github.com/posit-dev/py-shinylive) dev version packages
- Shinylive web [R](https://shinylive.io/r/editor/) and [Python](https://shinylive.io/py/editor/) code editor
- Shinylive examples [R](shinylive.io/r/examples/) and [Python](shinylive.io/py/examples/) examples

## License

This tutorial is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/) License.