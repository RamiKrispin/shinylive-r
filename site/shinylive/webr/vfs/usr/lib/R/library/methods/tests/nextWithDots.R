setClass("A")
 # Works OK but breaks another test later - renaming B to BB avoids the issue
setClass("BB", contains = c("array", "A"))
a = array(1:12, c(2,3,4))
bb = new("BB", a)
a2 = array(8:1, rep(2,3))
stopifnot(identical(initialize(bb, a2), new("BB",a2)))

withDots <- function(x, ...) names(list(...))

setGeneric("withDots")

setClass("C", representation(x="numeric", y="character"))

setMethod("withDots", "C", function(x, ...)
          callNextMethod()
          )
stopifnot(identical(withDots(1, a=1, b=2), withDots(new("C"), a=1, b=2)))
removeClass("C"); removeClass("BB"); removeClass("A")
removeGeneric("withDots")
rm(a, bb, a2)
