<!DOCTYPE html><html><head><title>R: R News</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css">
<script type="text/javascript">
const macros = { "\\R": "\\textsf{R}", "\\code": "\\texttt"};
function processMathHTML() {
    var l = document.getElementsByClassName('reqn');
    for (let e of l) { katex.render(e.textContent, e, { throwOnError: false, macros }); }
    return;
}</script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.js"
    onload="processMathHTML();"></script>
<link rel="stylesheet" type="text/css" href="R.css" />
</head><body><div class="container">

<table style="width: 100%;"><tr><td>NEWS</td><td style="text-align: right;">R Documentation</td></tr></table>

<h2 id='NEWS'>R News</h2>

<h3><img src="../help/figures/../../html/Rlogo.svg" class="toplogo" alt="[R logo]" /> CHANGES IN R 4.3.0</h3>



<h4>SIGNIFICANT USER-VISIBLE CHANGES</h4>


<ul>
<li><p> Calling <code>&amp;&amp;</code> or <code>||</code> with LHS or (if evaluated) RHS of
length greater than one is now always an error, with a report of
the form
</p>
<pre>    'length = 4' in coercion to 'logical(1)'</pre>
<p>Environment variable <span class="env">_R_CHECK_LENGTH_1_LOGIC2_</span> no longer has
any effect.
</p>
</li></ul>




<h4>NEW FEATURES</h4>


<ul>
<li><p> The included BLAS sources have been updated to those shipped
with LAPACK version 3.10.1.  (This caused some platform-dependent
changes to package check output.)  And then to the sources from
LAPACK version 3.11.0 (with changes only to double complex
subroutines).
</p>
</li>
<li><p> The included LAPACK sources have been updated to include the
four Fortran 90 routines rather than their Fortran 77
predecessors.  This may give some different signs in SVDs or
eigendecompositions..  (This completes the transition to LAPACK
3.10.x begun in <span class="rlang"><b>R</b></span> 4.2.0.)
</p>
</li>
<li><p> The LAPACK sources have been updated to version 3.11.0.  (No
new subroutines have been added, so this almost entirely bug
fixes: Those fixes do affect some computations with <code>NaN</code>s,
including <span class="rlang"><b>R</b></span>'s <code>NA</code>.)
</p>
</li>
<li><p> The parser now signals <em>classed</em> errors, notably in
case of the pipe operator <code>|&gt;</code>.  The error object and
message now give line and column numbers, mostly as proposed and
provided by Duncan Murdoch in <a href="https://bugs.R-project.org/show_bug.cgi?id=18328">PR#18328</a>.
</p>
</li>
<li> <p><code>toeplitz()</code> is now generalized for asymmetric cases,
with a <code>toeplitz2()</code> variant.
</p>
</li>
<li> <p><code>xy.coords()</code> and <code>xyz.coords()</code> and consequently,
e.g., <code>plot(x,y, log = "y")</code> now signal a <em>classed</em> warning
about negative values of y (where <code>log(.)</code> is <code>NA</code>).
Such a warning can be specifically suppressed or caught otherwise.
</p>
</li>
<li><p> Regular expression functions now check more thoroughly whether
their inputs are valid strings (in their encoding, e.g. in UTF-8).
</p>
</li>
<li><p> The performance of <code>grep()</code>, <code>sub()</code>,
<code>gsub()</code> and <code>strsplit()</code> has been improved,
particularly with <code>perl = TRUE</code> and <code>fixed = TRUE</code>.  Use
of <code>useBytes = TRUE</code> for performance reasons should no longer
be needed and is discouraged: it may lead to incorrect results.
</p>
</li>
<li> <p><code>apropos()</code> gains an argument <code>dot_internals</code> which
is used by the completion (<code>help(rcompgen)</code>) engine to also
see <span class="pkg">base</span> internals such as <code>.POSIXct()</code>.
</p>
</li>
<li><p> Support in <code>tools::Rdiff()</code> for comparing uncompressed
PDF files is further reduced &ndash; see its help page.
</p>
</li>
<li> <p><code>qqplot(x, y, ...)</code> gains <code>conf.level</code> and
<code>conf.args</code> arguments for computing and plotting a confidence
band for the treatment function transforming the distribution of
<code>x</code> into the distribution of <code>y </code> (Switzer, 1976,
<em>Biometrika</em>). Contributed by Torsten Hothorn.
</p>
</li>
<li><p> Performance of <code>package_dependencies()</code> has been improved
for cases when the number of dependencies is large.
</p>
</li>
<li><p> Strings newly created by <code>gsub()</code>, <code>sub()</code> and
<code>strsplit()</code>, when any of the inputs is marked as <code>"bytes"</code>,
are also marked as <code>"bytes"</code>.  This reduces the risk of creating
invalid strings and accidental substitution of bytes deemed invalid.
</p>
</li>
<li><p> Support for <code>readLines(encoding = "bytes")</code> has been added to
allow processing special text files byte-by-byte, without creating
invalid strings.
</p>
</li>
<li> <p><code>iconv(from = "")</code> now takes into account any declared
encoding of the input elements and uses it in preference to the native
encoding.  This reduces the risk of accidental creation of invalid
strings, particularly when different elements of the input have
different encoding (including <code>"bytes"</code>).
</p>
</li>
<li><p> Package repositories in <code>getOption("repos")</code> are now
initialized from the &lsquo;<span class="file">repositories</span>&rsquo; file when <span class="pkg">utils</span> is
loaded (if not already set, e.g., in &lsquo;<span class="file">.Rprofile</span>&rsquo;).
(From a report and patch proposal by Gabriel Becker in <a href="https://bugs.R-project.org/show_bug.cgi?id=18405">PR#18405</a>.)
</p>
</li>
<li> <p><code>compactPDF()</code> gets a <code>verbose</code> option.
</p>
</li>
<li> <p><code>type.convert()</code> and hence <code>read.table()</code> get new
option <code>tryLogical = TRUE</code> with back compatible default.  When
set to false, converts <code>"F"</code> or <code>"T"</code> columns to character.
</p>
</li>
<li><p> Added new unit prefixes <code>"R"</code> and <code>"Q"</code> for
abbreviating (unrealistically large) sizes beyond <code class="reqn">10^{27}</code> in
<code>standard = "SI"</code>, thanks to Henrik Bengtsson's <a href="https://bugs.R-project.org/show_bug.cgi?id=18435">PR#18435</a>.
</p>
</li>
<li> <p><code>as.data.frame()</code>'s default method now also works fine
with atomic objects inheriting from classes such as <code>"roman"</code>,
<code>"octmode"</code> and <code>"hexmode"</code>, such fulfilling the wish of
<a href="https://bugs.R-project.org/show_bug.cgi?id=18421">PR#18421</a>, by Benjamin Feakins.
</p>
</li>
<li><p> The <code>as.data.frame.vector()</code> utility now errors for
wrong-length <code>row.names</code>.  It warned for almost six years, with
&ldquo;Will be an error!&rdquo;.
</p>
</li>
<li> <p><code>sessionInfo()</code> now also contains <code>La_version()</code> and
reports codepage and timezone when relevant, in both <code>print()</code>
and <code>toLatex()</code> methods which also get new option <code>tzone</code>
for displaying timezone information when <code>locale = FALSE</code>.
</p>
</li>
<li><p> New function <code>R_compiled_by()</code> reports the C and
Fortran compilers used to build <span class="rlang"><b>R</b></span>, if known.
</p>
</li>
<li> <p><code>predict(&lt;lm&gt;, newdata = *)</code> no longer unnecessarily creates
an <code>offset</code> of all <code>0</code>s.
</p>
</li>
<li> <p><code>solve()</code> for complex inputs now uses argument <code>tol</code>
and by default checks for &lsquo;computational singularity&rsquo; (as
it long has done for numeric inputs).
</p>
</li>
<li> <p><code>predict(&lt;rank-deficient lm&gt;, newdata=*)</code> now obeys a new
argument <code>rankdeficient</code>, with new default <code>"warnif"</code>,
warning only if there are non-estimable cases in <code>newdata</code>.
Other options include <code>rankdeficient = "NA"</code>, predicting <code>NA</code>
for non-estimable <code>newdata</code> cases.
This addresses <a href="https://bugs.R-project.org/show_bug.cgi?id=15072">PR#15072</a> by Russ Lenth and is based on his original
proposal and discussions in <a href="https://bugs.R-project.org/show_bug.cgi?id=16158">PR#16158</a> also by David Firth and Elin Waring.
Still somewhat experimental.
</p>
</li>
<li> <p><code>Rgui</code> console implementation now works better with the
<code>NVDA</code> screen reader when the full blinking cursor is selected.
The underlying improvements in cursor handling may help also other
screen readers on Windows.
</p>
</li>
<li><p> The drop-field control in GraphApp can now be left with the TAB
key and all controls can be navigated in the reverse order using the
Shift+TAB key, improving accessibility of the <code>Rgui</code>
configuration editor.
</p>
</li>
<li> <p><code>qnorm(&lt;very large negative&gt;, log.p=TRUE)</code> is now fully
accurate (instead of to &ldquo;only&rdquo; minimally five digits).
</p>
</li>
<li> <p><code>demo(error.catching)</code> now also shows off
<code>withWarnings()</code> and <code>tryCatchWEMs()</code>.
</p>
</li>
<li><p> As an experimental feature the placeholder <code>_</code> can now
also be used in the <code>rhs</code> of a forward pipe <code>|&gt;</code>
expression as the first argument in an extraction call, such as
<code>_$coef</code>. More generally, it can be used as the head of a
chain of extractions, such as <code>_$coef[[2]]</code>.
</p>
</li>
<li><p> Spaces in the environment variable used to choose the <span class="rlang"><b>R</b></span>
session's temporary directory (<span class="env">TMPDIR</span>, <span class="env">TMP</span> and
<span class="env">TEMP</span> are tried in turn) are now fatal.  (On Windows the
&lsquo;short path&rsquo; version of the path is tried and used if that
does not contain a space.)
</p>
</li>
<li> <p><code>all.equal.numeric()</code> gets a new optional switch
<code>giveErr</code> to return the numeric error as attribute.  Relatedly,
<code>stopifnot(all.equal&lt;some&gt;(a, b, ..))</code> is as &ldquo;smart&rdquo; now,
as <code>stopifnot(all.equal(....))</code> has been already, thus allowing
customized <code>all.equal&lt;Some&gt;()</code> wrappers.
</p>
</li>
<li> <p><span class="rlang"><b>R</b></span> on Windows is now able to work with path names longer than
260 characters when these are enabled in the system (requires at least
Windows 10 version 1607).  Packages should be updated to work with
long paths as well, instead of assuming <code>PATH_MAX</code> to be the
maximum length.  Custom front-ends and applications embedding <span class="rlang"><b>R</b></span> need
to update their manifests if they wish to allow this feature.  See
<a href="https://blog.r-project.org/2023/03/07/path-length-limit-on-windows">https://blog.r-project.org/2023/03/07/path-length-limit-on-windows</a>
for more information.
</p>
</li>
<li> <p>&lsquo;Object not found&rsquo; and &lsquo;Missing argument&rsquo;
errors now give a more accurate error context. Patch provided by
Lionel Henry in <a href="https://bugs.R-project.org/show_bug.cgi?id=18241">PR#18241</a>.
</p>
</li>
<li><p> The <code>@</code> operator is now an S3 generic. Based on
contributions by Tomasz Kalinowski in <a href="https://bugs.R-project.org/show_bug.cgi?id=18482">PR#18482</a>.
</p>
</li>
<li><p> New generic <code>chooseOpsMethod()</code> provides a mechanism
for objects to resolve cases where two suitable methods are found
for an Ops Group Generic. This supports experimenting with
alternative object systems. Based on contributions by Tomasz
Kalinowski in <a href="https://bugs.R-project.org/show_bug.cgi?id=18484">PR#18484</a>.
</p>
</li>
<li> <p><code>inherits(x, what)</code> now accepts values other than a
simple character vector for argument <code>what</code>. A new generic,
<code>nameOfClass()</code>, is called to resolve the class name from
<code>what</code>. This supports experimenting with alternative object
systems. Based on contributions by Tomasz Kalinowski in
<a href="https://bugs.R-project.org/show_bug.cgi?id=18485">PR#18485</a>.
</p>
</li>
<li><p> Detection of BLAS/LAPACK in use (<code>sessionInfo()</code>) with
FlexiBLAS now reports the current backend.
</p>
</li>
<li><p> The <code>"data.frame"</code> method for <code>subset()</code> now warns
about extraneous arguments, typically catching the use of &lsquo;<span class="samp">&#8288;=&#8288;</span>&rsquo;
instead of &lsquo;<span class="samp">&#8288;==&#8288;</span>&rsquo; in the <code>subset</code> expression.
</p>
</li>
<li><p> Calling <code>a:b</code> when numeric <code>a</code> or <code>b</code> is longer
than one may now be made into an error by setting environment variable
<span class="env">_R_CHECK_LENGTH_COLON_</span> to a true value, along the proposal in
<a href="https://bugs.R-project.org/show_bug.cgi?id=18419">PR#18419</a> by Henrik Bengtsson.
</p>
</li>
<li> <p><code>density(x, weights = *)</code> now warns if automatic bandwidth
selection happens without using <code>weights</code>; new optional
<code>warnWbw</code> may suppress the warning.  Prompted by Christoph
Dalitz' <a href="https://bugs.R-project.org/show_bug.cgi?id=18490">PR#18490</a> and its discussants.
</p>
</li>
<li> <p><code>rm(list = *)</code> is faster and more readable thanks to Kevin
Ushey's <a href="https://bugs.R-project.org/show_bug.cgi?id=18492">PR#18492</a>.
</p>
</li>
<li><p> The <code>plot.lm()</code> function no longer produces a normal
Q-Q plot for GLMs. Instead it plots a half-normal Q-Q plot of the
absolute value of the standardized deviance residuals.
</p>
</li>
<li><p> The <code>print()</code> method for class <code>"summary.glm"</code> no
longer shows summary statistics for the deviance residuals by
default.  Its optional argument <code>show.residuals</code> can be used
to show them if required.
</p>
</li>
<li><p> The <code>tapply()</code> function now accepts a data frame as its
<code>X</code> argument, and allows <code>INDEX</code> to be a formula in that
case. <code>by.data.frame()</code> similarly allows <code>INDICES</code> to be
a formula.
</p>
</li>
<li><p> The performance of <code>df[j] &lt;- value</code> (including for
missing <code>j</code>) and <code>write.table(df)</code> has been improved for
data frames <code>df</code> with a large number of columns.  (Thanks to
Gabriel Becker's <a href="https://bugs.R-project.org/show_bug.cgi?id=18500">PR#18500</a>, <a href="https://bugs.R-project.org/show_bug.cgi?id=18503">PR#18503</a> and discussants, prompted
by a report from Toby Dylan Hocking on the R-devel mailing list.)
</p>
</li>
<li><p> The matrix multiply operator <code>%*%</code> is now an S3 generic,
belonging to new group generic <code>matrixOps</code>.  From Tomasz
Kalinowski's contribution in <a href="https://bugs.R-project.org/show_bug.cgi?id=18483">PR#18483</a>.
</p>
</li>
<li><p> New function <code>array2DF()</code> to convert arrays to data
frames, particularly useful for the list arrays created by
<code>tapply()</code>.
</p>
</li></ul>




<h4>DATES and TIMES</h4>


<ul>
<li><p> On platforms where (non-UTC) datetimes before 1902 (or
before 1900 as with system functions on recent macOS) are guessed
by extrapolating time zones from 1902-2037, there is a warning at
the first use of extrapolation in a session.  (As all time zones
post 2037 are extrapolation, we do not warn on those.)
</p>
</li>
<li><p> (Platforms using <span class="option">--with-internal-tzone</span>, including
Windows and by default macOS). How years are printed in dates or
date-times can be controlled by environment variable
<span class="env">R_PAD_YEARS_BY_ZERO</span>.  The default remains to pad to 4 digits
by zeroes, but setting value &lsquo;<span class="samp">&#8288;no&#8288;</span>&rsquo; gives no padding (as used
by default by <code>glibc</code>).
</p>
</li>
<li> <p><code>strftime()</code> tries harder to determine the offset for
the <code>"%z"</code> format, and succeeds on the mainstream <span class="rlang"><b>R</b></span> platforms.
</p>
</li>
<li> <p><code>strftime()</code> has a limit of 2048 bytes on the string
produced &ndash; attempting to exceed this is an error.  (Previously it
silently truncated at 255 bytes.)
</p>
</li>
<li> <p><code>sessionInfo()</code> records (and by default prints) the
system time zone as part of the locale information.  Also, the
source (system/internal) of the date-time conversion and printing
functions.
</p>
</li>
<li><p> Objects of class <code>"POSIXlt"</code> created in this version of
<span class="rlang"><b>R</b></span> always have 11 components: component <code>zone</code> is always set,
and component <code>gmtoff</code> is set for times in UTC and usually
set on the (almost all) platforms which have C-level support,
otherwise is <code>NA</code>.
</p>
</li>
<li><p> There are comprehensive validity checks on the structure of
objects of class <code>"POSIXlt"</code> when converting (including
formatting and printing).  (This avoids mis-conversions of
hand-crafted objects.)
</p>
</li>
<li><p> There is some support for using the native date-time
routines on macOS: this is only viable on recent versions
(e.g. 12.6 and 13) and does get wrong some historical changes
(before 1900, during WWII).  Use of <span class="option">--with-internal-tzone</span>
remains the default.
</p>
</li>
<li> <p><code>as.POSIXct(&lt;numeric&gt;)</code> and <code>as.POSIXlt(.)</code> (without
specifying <code>origin</code>) now work.
So does <code>as.Date(&lt;numeric&gt;)</code>.
</p>
</li>
<li> <p><code>as.Date.POSIXct(., tz)</code> now treats several <code>tz</code>
values, notably <code>"GMT"</code> as equivalent to <code>"UTC"</code>, proposed
and improved by Michael Chirico and Joshua Ulrich in <a href="https://bugs.R-project.org/show_bug.cgi?id=17674">PR#17674</a>.
</p>
</li>
<li><p> Experimental <code>balancePOSIXlt()</code> utility allows using
&ldquo;ragged&rdquo; and or out-of-range <code>"POSIXlt"</code> objects more
correctly, e.g., in subsetting and subassignments.  Such objects
are now documented.
</p>
<p>More experimentally, a <code>"POSIXlt"</code> object may have an attribute
<code>"balanced"</code> indicating if it is known to be filled or fully
balanced.
</p>
</li>
<li><p> Functions <code>axis.Date()</code> and <code>axis.POSIXct()</code> are
rewritten to gain better default tick locations and better default
formats by using <code>prettyDate()</code>. Thanks to Swetlana
Herbrandt.
</p>
</li>
<li><p> The mapping of Windows' names for time zones to IANA's
&lsquo;Olson&rsquo; names has been updated.  When ICU is available (it is
by default), it is used to get a mapping for the current region set in
Windows.  This can be overridden by setting environment variable
<span class="env">TZ</span> to the desired Olson name &mdash; see <code>OlsonNames()</code> for
those currently available.
</p>
</li></ul>




<h4>GRAPHICS</h4>


<ul>
<li><p> The graphics engine version, <code>R_GE_version</code>, has been
bumped to <code>16</code> and so packages that provide graphics devices
should be reinstalled.
</p>
</li>
<li><p> The <span class="pkg">grDevices</span> and <span class="pkg">grid</span> packages have new
functions for rendering typeset glyphs, primarily:
<code>grDevices::glyphInfo()</code> and <code>grid::grid.glyph()</code>.
</p>
<p>Rendering of typeset glyphs is only supported so far on the
Cairo-based graphics devices and on the <code>pdf()</code> and
<code>quartz()</code> devices.
</p>
</li>
<li><p> The defined behaviour for <code>"clear"</code> and <code>"source"</code>
compositing operators (via <code>grid::grid.group()</code>) has been
changed (to align better with
simple interpretation of original Porter-Duff definitions).
</p>
</li>
<li><p> Support for gradients, patterns, clipping paths, masks,
groups, compositing operators, and affine transformations has
been added to the <code>quartz()</code> device.
</p>
</li></ul>




<h4>INSTALLATION on a UNIX-ALIKE</h4>


<ul>
<li><p> A system installation of generic LAPACK 3.10.0 or later will
be preferred to the version in the <span class="rlang"><b>R</b></span> sources.
</p>
<p><code>configure</code> option <span class="option">--with-lapack=no</span> (equivalently
<span class="option">--without-lapack</span>) forces compilation of the internal
LAPACK sources.
</p>
<p>If <span class="option">--with-lapack</span> is not specified, a system
<code>liblapack</code> is looked for and used if it reports version
3.10.0 or later and does not contain BLAS routines.
</p>
<p>Packages using LAPACK will need to be reinstalled if this changes
to using an external library.
</p>
</li>
<li><p> On &lsquo;<span class="samp">&#8288;aarch64&#8288;</span>&rsquo; Linux platforms using GCC,
<code>configure</code> now defaults to <span class="option">-fPIC</span> (instead of
<span class="option">-fpic</span>), as desired in <a href="https://bugs.R-project.org/show_bug.cgi?id=18326">PR#18326</a>.
</p>
</li>
<li> <p><code>configure</code> now checks conversion of datetimes
between <code>POSIXlt</code> and <code>POSIXct</code> around year 2020.  Failure
(which has been seen on platforms missing <code>tzdata</code>) is fatal.
</p>
</li>
<li><p> If <code>configure</code> option
<span class="option">--with-valgrind-instrumentation</span> is given value <code>1</code>
or <code>2</code>, option <span class="option">--with-system-valgrind-headers</span> is now
the default and ignored (with a warning).  It is highly
recommended that the system headers are installed alongside
<code>valgrind</code>: they are part of its packaging on some Linux
distributions and packaged separately (e.g. in the
&lsquo;<span class="file">valgrind-devel</span>&rsquo; RPM) on others.  <code>configure</code> will
give a warning if they are not found.
</p>
<p>The system headers will be required in a future release of <span class="rlang"><b>R</b></span>
to build with <code>valgrind</code> instrumentation.
</p>
</li>
<li> <p><code>libcurl</code> 8.x is now accepted by <code>configure</code>:
despite a change in major version number it changes neither API
nor ABI.
</p>
</li></ul>




<h4>INSTALLATION on WINDOWS</h4>


<ul>
<li><p> The makefiles and installer scripts for Windows have been
tailored to &lsquo;<span class="file">Rtools43</span>&rsquo;, an update of the &lsquo;<span class="file">Rtools42</span>&rsquo;
toolchain.  It is based on <code>gcc</code> 12 and newer versions of
MinGW-W64, binutils and libraries.  At this time R-devel can still
be built using Rtools42 without changes, but when R-devel is
installed via the installer, it will by default look for Rtools43.
</p>
</li>
<li><p> Old make targets <code>rsync-extsoft</code> and 32-bit ones that
are no longer needed have been removed.
</p>
</li>
<li><p> Default builds (including for packages) no longer select
C99.  Thus the C standard used is the default for the compiler,
which for the toolchain in &lsquo;<span class="file">Rtools43</span>&rsquo; is C17.  (This is
consistent with Unix builds.)
</p>
</li></ul>




<h4>PACKAGE INSTALLATION</h4>


<ul>
<li><p> The default C++ standard has been changed to C++17 where
available (which it is on all currently checked platforms): if not
C++14 or C++11 is used if available otherwise C++ is not supported.
</p>
</li>
<li> <p><code>USE_FC_LEN_T</code> is the default: this uses the
correct (compiler-dependent) prototypes for Fortran BLAS/LAPACK
routines called from C/C++, and requires adjustment of many such
calls &ndash; see &lsquo;Writing R Extensions&rsquo; §6.6.1.
</p>


</li>
<li><p> There is initial support for C++23 as several compilers are
now supporting <code>-std=c++23</code> or <code>-std=c++2b</code> or similar.
As for C++20, there no additional <code>configure</code> checks for
C++23 features beyond a check that the compiler reports a
<code>__cplusplus</code> value greater than that in the C++20 standard.
C++ feature tests should be used.
</p>
</li>
<li><p> There is support for a package to indicate the version of
the C standard which should be used to compile it, and for the
installing user to specify this.  In most cases <span class="rlang"><b>R</b></span> defaults to the
C compiler's default standard which is C17 (a &lsquo;bug-fix&rsquo; of C11) &ndash;
earlier versions of <span class="rlang"><b>R</b></span> or compilers may have defaulted to C99.
</p>
<p>Current options are:
</p>

<dl>
<dt>USE_C17</dt><dd><p>Use a standard that is at most C17.  The
intention is to allow legacy packages to still be installed when
later C standards become the default, including packages
using new keywords as identifiers or with K&amp;R-style function
declarations.  This will use C17 if available, falling back
to C11.
</p>
</dd>
<dt>USE_C90</dt><dd><p>Use the C90 (aka C89) standard.  (As that standard
did not require compilers to identify that version, all we can
verify is that the compiler does not claim to be using a later
standard.  It may accept C99 features &ndash; for example
<code>clang</code> accepts // to make comments.)</p>
</dd>
<dt>USE_C99</dt><dd><p>Use the C99 standard. This should be rarely
needed &ndash; it avoids the few new features of C11/C17 which can
be useful if a package assumes them if C17 is specified and
they are not implemented.</p>
</dd>
<dt>USE_C23</dt><dd><p>Use C23 (or in future, later).  Compiler/library
support for C23 is still being implemented, but LLVM clang
from 15.0.0 and the upcoming GCC 13 have quite extensive support.
</p>
</dd>
</dl>

<p>These can be specified as part of the &lsquo;<span class="samp">&#8288;SystemRequirements&#8288;</span>&rsquo;
field in the package's &lsquo;<span class="file">DESCRIPTION</span>&rsquo; file or <em>via</em>
options <span class="option">--use-C17</span> and so on of <code>R CMD INSTALL</code>
and <code>R CMD SHLIB</code>.
</p>
<p>For further details see &ldquo;Writing R Extensions&rdquo; §1.2.5.
</p>
</li>
<li><p> (Windows) A &lsquo;<span class="file">src/Makefile.ucrt</span>&rsquo; or
&lsquo;<span class="file">src/Makefile.win</span>&rsquo; file is now included after
&lsquo;<span class="file"><var>R_HOME</var>/etc<var>R_ARCH</var>/Makeconf</span>&rsquo; and so no longer
needs to include that file itself.  Installation of a package with
such a file now uses a site &lsquo;<span class="file">Makevars</span>&rsquo; file in the same way
as a package with a &lsquo;<span class="file">src/Makevars.win</span>&rsquo; file would.
</p>
</li>
<li> <p><code>configure</code> is now passed crucial variables such as
<span class="env">CC</span> and <span class="env">CFLAGS</span> in its environment, as many packages
were not setting them (as documented in &lsquo;Writing R
Extensions&rsquo; §1.2).
</p>
<p>This has most effect where <code>configure</code> is used to compile
parts of the package &ndash; most often by <code>cmake</code> or
<code>libtool</code> which obfuscate the actual compile commands
used.
</p>
<p>Also used for <code>configure.win</code> and <code>configure.ucrt</code>
on Windows.
</p>
</li></ul>




<h4>FORTRAN FLAGS</h4>


<ul>
<li><p> The flag <span class="option">-fno-optimize-sibling-calls</span> is no longer
forced for <code>gfortran</code> 7 and later.  It should no longer be
needed now using &lsquo;hidden&rsquo; character-length arguments when
calling BLAS/LAPACK routines from C/C++ is the default even for
packages.  (Unless perhaps packages call Fortran code from C/C++
without using <span class="rlang"><b>R</b></span>'s headers and without allowing for these
arguments.)
</p>
</li></ul>




<h4>C-LEVEL FACILITIES</h4>


<ul>
<li><p> The deprecated S-compatibility macros <code>DOUBLE_*</code> in
&lsquo;<span class="file">R_ext/Constants.h</span>&rsquo; (included by &lsquo;<span class="file">R.h</span>&rsquo;) have been
removed.
</p>
</li>
<li><p> The deprecated legacy typedefs of <code>Sint</code> and
<code>Sfloat</code> in header &lsquo;<span class="file">R.h</span>&rsquo; are no longer defined, and that
header no longer includes header &lsquo;<span class="file">limits.h</span>&rsquo; from C nor
&lsquo;<span class="file">climits</span>&rsquo; from C++.
</p>
</li>
<li><p> New macro <code>CAD5R()</code> is provided in &lsquo;<span class="file">Rinternals.h</span>&rsquo;
and used in a few places in the <span class="rlang"><b>R</b></span> sources.
</p>
</li>
<li><p> ALTREP now supports <code>VECSXP</code> vectors. Contributed by
Gabor Csardi in <a href="https://bugs.R-project.org/show_bug.cgi?id=17620">PR#17620</a>.
</p>
</li>
<li><p> The <code>Rcomplex</code> definition (in header
&lsquo;<span class="file">R_ext/Complex.h</span>&rsquo;) has been extended to prevent possible
mis-compilation when interfacing with Fortran (<a href="https://bugs.R-project.org/show_bug.cgi?id=18430">PR#18430</a>).  The
new definition causes compiler warnings with static initializers
such as <code>{1, 2}</code>, which can be changed to <code>{.r=1,
	.i=2}</code>.
</p>
<p>Using the new definition from C++ depends on compiler extensions
supporting C features that have not been incorporated into the C++
standards but are available in <code>g++</code> and
<code>clang++</code>: this may result in C++ compiler warnings but
these have been worked around for recent versions of common
compilers (GCC, Apple/LLVM clang, Intel).
</p>
<p>It is intended to change the inclusion of header
&lsquo;<span class="file">R_ext/Complex.h</span>&rsquo; by other <span class="rlang"><b>R</b></span> headers, so C/C++ code files
which make use of <code>Rcomplex</code> should include that header
explicitly.
</p>
</li></ul>




<h4>UTILITIES</h4>


<ul>
<li> <p><code>R CMD check</code> does more checking of package &lsquo;<span class="file">.Rd</span>&rsquo;
files, warning about invalid email addresses and (some) invalid
URIs and noting empty &lsquo;<span class="samp">&#8288;\item&#8288;</span>&rsquo; labels in description lists.
</p>
</li>
<li> <p><code>R CMD check</code> now also reports problems when reading
package news in md (file &lsquo;<span class="file">NEWS.md</span>&rsquo;) and (optionally) plain
text (file &lsquo;<span class="file">NEWS</span>&rsquo;) formats.
</p>
</li>
<li> <p><span class="env">_R_CHECK_TIMINGS_</span> defaults to a value from the
environment even for <code>R CMD check --as-cran</code>; this allows
for exceptionally fast or slow platforms.
</p>
<p>It now applies to checking PDF and HTML versions of the manuals,
and &lsquo;checking CRAN incoming feasibility&rsquo;.
</p>
</li>
<li> <p><code>R CMD check</code> can optionally (but included in
<span class="option">--as-cran</span>) check whether HTML math rendering <em>via</em>
KaTeX works for the package &lsquo;<span class="file">.Rd</span>&rsquo; files.
</p>
</li>
<li><p> Non-interactive debugger invocations can be trapped by
setting the environment variable
<span class="env">_R_CHECK_BROWSER_NONINTERACTIVE_</span> to a true value.  This is
enabled by <code>R CMD check --as-cran</code> to detect the use of
leftover <code>browser()</code> statements in the package.
</p>
</li>
<li><p> The use of <code>sprintf</code> and <code>vsprintf</code> from C/C++ has
been deprecated in macOS 13 and is a known security risk.
<code>R CMD check</code> now reports (on all platforms) if their use
is found in compiled code: replace by <code>snprintf</code> or
<code>vsnprintf</code> respectively. [<b>NB:</b> whether such calls get
compiled into the package is platform-dependent.]
</p>
</li>
<li><p> Where recorded at installation, <code>R CMD check</code>
reports the C and Fortran compilers used to build <span class="rlang"><b>R</b></span>.
</p>
<p>It reports the OS in use (if known, as given by
<code>osVersion</code>) as well as that <span class="rlang"><b>R</b></span> was built for.
</p>
<p>It notes if a C++ standard was specified which is older than the
current default: many packages have used C++11 to mean &lsquo;not
C++98&rsquo; &mdash; as C++11 is the minimum supported since <span class="rlang"><b>R</b></span> 4.0.0, that
specification can probably be removed.
</p>
</li>
<li> <p><code>R CMD INSTALL</code> reports the compilers (and on
macOS, the SDK) used, and this is copied to the output of
<code>R CMD check</code>.
</p>
<p>Where a C++ standard is specified, it is reported.
</p>
</li>
<li> <p><code>R CMD check</code>'s &lsquo;checking compilation flags in
Makevars&rsquo; has been relaxed to accept the use of flags such as
<span class="option">-std=f2008</span> in &lsquo;<span class="samp">&#8288;PKG_FFLAGS&#8288;</span>&rsquo;.
</p>
</li>
<li> <p><code>tools::buildVignettes()</code> has a new argument <code>skip</code>,
which is used by <code>R CMD check</code> to skip (and note)
vignettes with unavailable &lsquo;<span class="samp">&#8288;\VignetteDepends&#8288;</span>&rsquo; (<a href="https://bugs.R-project.org/show_bug.cgi?id=18318">PR#18318</a>).
</p>
</li>
<li><p> New generic <code>.AtNames()</code> added to enable class-specific
completions after <code>@</code>. The formerly internal function
<code>findMatches()</code> is now exported, mainly for use in methods
for <code>.DollarNames()</code> and <code>.AtNames()</code>.
</p>
</li></ul>




<h4>DEPRECATED AND DEFUNCT</h4>


<ul>
<li> <p><code>default.stringsAsFactors()</code> is defunct.
</p>
</li>
<li><p> Calling <code>as.data.frame.&lt;class&gt;()</code> directly (for 12 atomic
classes) is going to be formally deprecated, currently activated by
setting the environment variable
<span class="env">_R_CHECK_AS_DATA_FRAME_EXPLICIT_METHOD_</span> to non-empty, which
also happens in <code>R CMD check --as-cran</code>.
</p>
</li></ul>




<h4>BUG FIXES</h4>


<ul>
<li><p> Hashed <code>environment</code>s with sizes less than 5 can now grow.
(Reported to R-devel by Duncan Garmonsway.)
</p>
</li>
<li> <p><code>as.character(&lt;Rd&gt;, deparse = TRUE)</code> failed to
re-escape curly braces in LaTeX-like text.
(Reported by Hadley Wickham in <a href="https://bugs.R-project.org/show_bug.cgi?id=18324">PR#18324</a>.)
</p>
</li>
<li> <p><code>library()</code> now passes its <code>lib.loc</code> argument when
requiring <code>Depends</code> packages; reported (with fix) in <a href="https://bugs.R-project.org/show_bug.cgi?id=18331">PR#18331</a>
by Mikael Jagan.
</p>
</li>
<li> <p><code>R CMD Stangle</code>: improved message about &lsquo;Output&rsquo;
files.
</p>
</li>
<li> <p><code>head(x, n)</code> and <code>tail(x, n)</code> now signal an error if
<code>n</code> is not numeric, instead of incidentally &ldquo;working&rdquo;
sometimes returning all of <code>x</code>.  Reported and discussed by Colin
Fay, in <a href="https://bugs.R-project.org/show_bug.cgi?id=18357">PR#18357</a>.
</p>
</li>
<li><p> The <code>"lm"</code> method for <code>summary()</code> now gives the
correct F-statistic when the model contains an offset.  Reported in
<a href="https://bugs.R-project.org/show_bug.cgi?id=18008">PR#18008</a>.
</p>
</li>
<li> <p><code>C()</code> and <code>`contrasts&lt;-`()</code> now preserve factor
level names when given a function object (as opposed a function
name which did preserve names). Reported in <a href="https://bugs.R-project.org/show_bug.cgi?id=17616">PR#17616</a>.
</p>
</li>
<li> <p><code>c(a = 1, 2)[[]]</code> no longer matches <code>2</code> but rather
signals a <em>classed</em> error.  Reported and analysed by Davis Vaughan in
<a href="https://bugs.R-project.org/show_bug.cgi?id=18367">PR#18367</a>, a duplicate of <a href="https://bugs.R-project.org/show_bug.cgi?id=18004">PR#18004</a>, by Jan Meis et al.
For consistency, <code>NULL[[]]</code> is also erroneous now.
<code>x[[]] &lt;- v</code> gives an error of the same class <code>"MissingSubscriptError"</code>.
</p>
</li>
<li><p> The <code>relist()</code> function of <span class="pkg">utils</span> now supports
<code>NULL</code> elements in the skeleton (<a href="https://bugs.R-project.org/show_bug.cgi?id=15854">PR#15854</a>).
</p>
</li>
<li> <p><code>ordered(levels = *)</code> (missing <code>x</code>) now works
analogously to <code>factor(, ordered=TRUE)</code>; reported (with fix)
by Achim Zeileis in <a href="https://bugs.R-project.org/show_bug.cgi?id=18389">PR#18389</a>.
</p>
</li>
<li><p> User-defined Rd macro definitions can now span multiple lines,
thanks to a patch from Duncan Murdoch. Previously, the Rd parser
silently ignored everything after the first line.
</p>
</li>
<li><p> Plain-text help (<code>tools::Rd2txt()</code>) now preserves an
initial blank line for text following description list items.
</p>
</li>
<li> <p><code>tools::Rd2HTML()</code> and <code>tools::Rd2latex()</code> no
longer split <code style="white-space: pre;">&#8288;\arguments&#8288;</code> and <code style="white-space: pre;">&#8288;\value&#8288;</code> lists at Rd comments.
</p>
</li>
<li> <p><code>tools::Rd2latex()</code> now correctly handles optional text
outside <code style="white-space: pre;">&#8288;\item&#8288;</code>s of argument lists as well as bracketed text
at the beginning of sections, e.g., <code style="white-space: pre;">&#8288;\value{[NULL]}&#8288;</code>.
</p>
</li>
<li> <p><code>as.character(&lt;POSIXt&gt;)</code> now behaves more in line with the
methods for atomic vectors such as numbers, and is no longer
influenced by <code>options()</code>.
Ditto for <code>as.character(&lt;Date&gt;)</code>.
The <code>as.character()</code> method gets arguments <code>digits</code> and <code>OutDec</code>
with defaults <em>not</em> depending on <code>options()</code>.
Use of <code>as.character(*, format = .)</code> now warns.
</p>
</li>
<li><p> Similarly, the <code>as.character.hexmode()</code> and
<code>*.octmode()</code> methods also behave as <code>good citizen</code>
methods and back compatibility option <code>keepStr = TRUE</code>.
</p>
</li>
<li><p> The <code>as.POSIXlt(&lt;POSIXlt&gt;)</code> and
<code>as.POSIXct(&lt;POSIXct&gt;)</code> default methods now do obey their
<code>tz</code> argument, also in this case.
</p>
</li>
<li> <p><code>as.POSIXlt(&lt;Date&gt;)</code> now does apply a <code>tz</code> (time zone)
argument, as does <code>as.POSIXct()</code>; partly suggested by Roland Fuß on
the R-devel mailing list.
</p>
</li>
<li> <p><code>as.Date.POSIXlt(x)</code> now also works when the list components
are of unequal length, aka &ldquo;partially filled&rdquo; or &ldquo;ragged&rdquo;.
</p>
</li>
<li> <p><code>expand.model.frame()</code> looked up variables in the wrong
environment when applied to models fitted without <code>data</code>.
Reported in <a href="https://bugs.R-project.org/show_bug.cgi?id=18414">PR#18414</a>.
</p>
</li>
<li> <p><code>time()</code> now (also) uses the
<code>ts.eps = getOption("ts.eps")</code>
argument and thus by default rounds values very close to the start (or
end) of a year.  Based on a proposal by Andreï V. Kostyrka on R-help.
</p>
</li>
<li><p> Printing of a <code>factanal()</code> result with just one factor and
<code>sort = TRUE</code> now works regularly, fixing <a href="https://bugs.R-project.org/show_bug.cgi?id=17863">PR#17863</a> by Timothy
Bates, thanks to the &lsquo;R Contributors&rsquo; working group.
</p>
</li>
<li><p> Printing 0-length objects of class
<code>"factor"</code>, <code>"roman"</code>, <code>"hexmode"</code>,
<code>"octmode"</code>, <code>"person"</code>, <code>"bibentry"</code>, or
<code>"citation"</code> now prints something better, one
of which fixes <a href="https://bugs.R-project.org/show_bug.cgi?id=18422">PR#18422</a>, reported by Benjamin Feakins.
</p>
</li>
<li> <p><code>Sys.timezone()</code> queries <code>timedatectl</code> only if
<code>systemd</code> is loaded; addressing a report by Jan Gorecki in
<a href="https://bugs.R-project.org/show_bug.cgi?id=17421">PR#17421</a>.
</p>
</li>
<li><p> The formula method of <code>cor.test()</code> had scoping problems
when <code>environment(formula)</code> was not the calling environment;
reported with a patch proposal by Mao Kobayashi in <a href="https://bugs.R-project.org/show_bug.cgi?id=18439">PR#18439</a>.
</p>
</li>
<li> <p><code>attach()</code> of an environment with active bindings now
preserves the active bindings.  Reported by Kevin Ushey in
<a href="https://bugs.R-project.org/show_bug.cgi?id=18425">PR#18425</a>.
</p>
</li>
<li><p> BLAS detection now works also with system-provided libraries not
available as regular files.  This fixes detection of the Accelerate
framework on macOS since Big Sur.  Reported by David Novgorodsky.
</p>
</li>
<li> <p><code>download.file()</code> gives a helpful error message in case of
an invalid <code>download.file.method</code> option, thanks to Colin Fay's
report in <a href="https://bugs.R-project.org/show_bug.cgi?id=18455">PR#18455</a>.
</p>
</li>
<li><p> Sporadic crashes of <code>Rterm</code> when using completion have
been fixed.
</p>
</li>
<li> <p><code>Rprof()</code> is now more reliable.  A livelock in thread
initialization with too short sampling interval has been fixed on
macOS.  A deadlock in using the C runtime has been fixed on Windows.
A potential deadlock has been prevented on Unix.
</p>
</li>
<li><p> Cursor placement in <code>Rgui</code> now works even after a
fixed-width font is selected.
</p>
</li>
<li><p> Mandatory options (<code>options()</code>) are now set on startup so
that saving and restoring them always works (<a href="https://bugs.R-project.org/show_bug.cgi?id=18372">PR#18372</a>).
</p>
</li>
<li><p> Package installation, <code>R CMD INSTALL</code> or <code>install.packages(*)</code>,
now parses each of the &lsquo;<span class="file">&lt;pkg&gt;/R/*.R</span>&rsquo; files individually instead
of first concatenating and then <code>parse()</code>ing the large resulting
file.  This allows parser or syntax errors to be diagnosed with
correct file names and line numbers, thanks to Simon Dedman's report
and Bill Dunlap's patch in <a href="https://bugs.R-project.org/show_bug.cgi?id=17859">PR#17859</a>.
</p>
<p>This <em>does</em> require syntactically self contained R source
files now, fixing another inadvertent bug.
</p>
</li>
<li> <p><code>predict.lm(&lt;model with offset&gt;)</code> now finds the offset in
the correct environment, thanks to André Gillibert's report and patch
in <a href="https://bugs.R-project.org/show_bug.cgi?id=18456">PR#18456</a>.
</p>
</li>
<li> <p><code>getInitial(&lt;formula&gt;)</code> now finds the <code>selfStart</code>
model in the correct environment.
(Reported by Ivan Krylov in <a href="https://bugs.R-project.org/show_bug.cgi?id=18368">PR#18368</a>.)
</p>
</li>
<li><p> Fix for possible segfault when using recently-added graphics
features, such as gradients, clipping paths, masks, and groups with
<code>pdf(file=NULL)</code>.
</p>
</li>
<li> <p><code>class(m) &lt;- class(m)</code> no longer changes a matrix <code>m</code>
by adding a class <em>attribute</em>.
</p>
</li>
<li> <p><code>packageDate(pkg)</code> now only warns once if there is no <code>pkg</code>.
</p>
</li>
<li><p> When <code>ts()</code> creates a multivariate time series,
<code>"mts"</code>, it also inherits from <code>"array"</code> now, and
<code>is.mts()</code> is documented <em>and</em> stricter.
</p>
</li>
<li> <p><code>Rd2txt()</code> now preserves line breaks of <code style="white-space: pre;">&#8288;\verb&#8288;</code> Rd
content and from duplicated <code style="white-space: pre;">&#8288;\cr&#8288;</code>.  The former also
fixes the rendering of verbatim output from Rd
<code style="white-space: pre;">&#8288;\Sexpr&#8288;</code> in plain-text help.
</p>
</li>
<li> <p><code>uniroot(f, interval)</code> should no longer wrongly converge
<em>outside</em> the interval in some cases where <code>abs(f(x)) == Inf</code>
for an <code>x</code> at the interval boundary, thanks to posts by Ben
Bolker and Serguei Sokol on R-devel.
</p>
</li>
<li><p> Vectorized alpha handling in palette functions such as in
<code>gray()</code>, <code>rainbow()</code>, or <code>hcl.colors()</code> works
correctly now, thanks to Achim Zeileis' report and patch in
<a href="https://bugs.R-project.org/show_bug.cgi?id=18476">PR#18476</a>.
</p>
</li>
<li><p> Formatting and <code>print()</code>ing of <code>bibentry</code> objects has
dropped the deprecated <code>citation.bibtex.max</code> argument, such that
the <code>bibtex</code> argument's default for <code>print.bibentry()</code>
depends directly on the <code>citation.bibtex.max</code> option, whereas in
<code>format.bibentry()</code> the option no longer applies.
</p>
</li>
<li><p> Attempting to use a character string naming a foreign
function entry point in a foreign function call in a package will
now signal an error if the packages has called
<code>R_forceSymbols</code> to specify that symbols must be
used.
</p>
</li>
<li><p> An error in <code>table()</code> could permanently set
<code>options(warn=2)</code> promoting all subsequent warnings to errors.
</p>
</li>
<li><p> The <code>sigma()</code> function gave misleading results for
binary GLMs.  A new method for objects of class <code>"glm"</code> returns the
square root of the estimate of the dispersion parameter using the
same calculation as <code>summary.glm()</code>.
</p>
</li>
<li> <p><code>bs()</code> and <code>ns()</code> in the (typical) case of automatic
knot construction, when some of the supposedly inner knots coincide
with boundary knots, now moves them inside (with a warning), building
on <a href="https://bugs.R-project.org/show_bug.cgi?id=18442">PR#18442</a> by Ben Bolker.
</p>
</li>
<li> <p><code>R CMD</code> on Windows now skips the site profile with
<span class="option">--no-site-file</span> and <span class="option">--vanilla</span> even when
<span class="env">R_PROFILE</span> is set (<a href="https://bugs.R-project.org/show_bug.cgi?id=18512">PR#18512</a>, from Kevin Ushey).
</p>
</li></ul>




<h3><img src="../help/figures/../../html/Rlogo.svg" class="toplogo" alt="[R logo]" /> CHANGES IN R 4.2.3</h3>



<h4>C-LEVEL FACILITIES</h4>


<ul>
<li><p> The definition of <code>DL_FUNC</code> in &lsquo;<span class="file">R_ext/Rdynload.h</span>&rsquo;
has been changed to be fully C-compliant.  This means that
functions loaded <em>via</em> for example <code>R_GetCCallable</code> need
to be cast to an appropriate type if they have any arguments.
</p>
</li>
<li> <p><code>.Machine</code> has a new element <code>sizeof.time_t</code> to
identify old systems with a 32-bit type and hence a limited range
of date-times (and limited support for dates millions of years
from present).
</p>
</li></ul>




<h4>PACKAGE INSTALLATION</h4>


<ul>
<li><p> (Windows) The default C++ standard had accidentally been
left at C++11 when it was changed to C++14 on Unix.
</p>
</li></ul>




<h4>BUG FIXES</h4>


<ul>
<li><p> As <code>"POSIXlt"</code> objects may be &ldquo;partially filled&rdquo;
and their list components meant to be recycled, <code>length()</code> now
is the length of the longest component.
</p>
</li>
<li> <p><code>as.POSIXlt.Date()</code> could underflow for dates in the
far past (more than half a million years BCE).
</p>
</li>
<li> <p><code>as.Date.POSIXlt(x)</code> would return <code>"1970-01-01"</code>
instead of <code>NA</code> in R 4.2.2, e.g., for </p>
<pre>
	x &lt;- as.POSIXlt(c("2019-01-30","2001-1-1"))
	x$mon &lt;- c(0L, NA); as.Date(x)</pre>
</li>
<li> <p><code>R CMD check</code> failed to apply enabled
<span class="env">_R_CHECK_SUGGESTS_ONLY_</span> to examples and vignettes
(regression in <span class="rlang"><b>R</b></span> 4.2.0).
</p>
</li>
<li> <p><code>R CMD check</code> did not re-build vignettes in
separate processes by default (regression in <span class="rlang"><b>R</b></span> 4.2.0).
</p>
</li>
<li><p> Running examples from HTML documentation now restores
previous <span class="pkg">knitr</span> settings and options (<a href="https://bugs.R-project.org/show_bug.cgi?id=18420">PR#18420</a>).
</p>
</li>
<li><p> Quartz: fonts are now located using Core Graphics API
instead of deprecated ATS which is no longer supported in the
macOS 13 SDK (<a href="https://bugs.R-project.org/show_bug.cgi?id=18426">PR#18426</a>).  This also addresses an issue where
the currently used font in the Quartz device context was not
correctly retained.
</p>
</li>
<li><p> (Windows) Math symbols in text drawing functions are again
rendered correctly (<a href="https://bugs.R-project.org/show_bug.cgi?id=18440">PR#18440</a>).  This fixes a regression in <span class="rlang"><b>R</b></span> 4.2.1
caused by a fix in <a href="https://bugs.R-project.org/show_bug.cgi?id=18382">PR#18382</a> which uncovered an issue in GraphApp
due to which the symbol charset was not used with TT Symbol font face.
</p>
</li>
<li><p> (Windows) Installing a package with a
&lsquo;<span class="file">src/Makefile.{win,ucrt}</span>&rsquo; file includes
&lsquo;<span class="file">~/.R/Makevars.win64</span>&rsquo; in the search for user makevars, as
documented in &ldquo;R Installation and Administration&rdquo; and done
for packages with a &lsquo;<span class="file">src/Makevars.{win,ucrt}</span>&rsquo; file.
</p>
</li>
<li> <p><code>format(&lt;POSIXlt_w/_unbalanced_sec&gt;, "....%OS&lt;n&gt;")</code> with
<code class="reqn">n &gt; 0</code> no longer accidentally uses the unbalanced seconds,
thanks to Suharto Anggono's report (including patch) in <a href="https://bugs.R-project.org/show_bug.cgi?id=18448">PR#18448</a>.
</p>
</li>
<li> <p><code>solve.default(a, b)</code> works around issues with
some versions of LAPACK when <code>a</code> contains <code>NA</code> or
<code>NaN</code> values.
</p>
</li>
<li><p> When <code>UseMethod()</code> cannot dispatch, it no longer segfaults
producing the error message in case of a long <code>class()</code>, thanks to
Joris Vankerschaver's report (including patch) in <a href="https://bugs.R-project.org/show_bug.cgi?id=18447">PR#18447</a>.
</p>
</li>
<li><p> When <code>example(foo, ..)</code> produces graphics on an interactive
device it needs to open itself, it now leaves <code>devAskNewPage()</code>
unchanged even when it was <code>FALSE</code>, thus fixing a 14 years old
&lsquo;&lt;FIXME&gt;&rsquo;.
</p>
</li>
<li> <p><code>packageDescription()</code> again catches errors from encoding
conversions. This also fixes broken <code>packageVersion()</code> in
C locale on systems where <code>iconv</code> does not support transliteration.
</p>
</li></ul>




<h3><img src="../help/figures/../../html/Rlogo.svg" class="toplogo" alt="[R logo]" /> CHANGES IN R 4.2.2</h3>



<h4>NEW FEATURES</h4>


<ul>
<li> <p><code>tools::Rdiff(useDiff = TRUE)</code> checks for the presence
of an external <code>diff</code> command and switches to
<code>useDiff = FALSE</code> if none is found.
This allows <code>R CMD Rdiff</code> to always work.
</p>
</li>
<li><p> On Windows, environment variable
<span class="env">R_LIBCURL_SSL_REVOKE_BEST_EFFORT</span> can be used to switch to
only &lsquo;best-effort&rsquo; SSL certificate revocation checks with
the default <code>"libcurl"</code> download method.  This reduces
security, but may be needed for downloads to work with MITM
proxies (<a href="https://bugs.R-project.org/show_bug.cgi?id=18379">PR#18379</a>).
</p>
</li>
<li><p> (macOS) The run-time check for libraries from XQuartz for
X11 and Tcl/Tk no longer uses <code>otool</code> from the Apple
Developer Tools (PR#18400).
</p>
</li>
<li><p> The LaTeX style for producing the PDF manuals, &lsquo;<span class="file">Rd.sty</span>&rsquo;,
now loads the standard &lsquo;<span class="samp">&#8288;amsmath&#8288;</span>&rsquo;, &lsquo;<span class="samp">&#8288;amsfonts&#8288;</span>&rsquo; and
&lsquo;<span class="samp">&#8288;amssymb&#8288;</span>&rsquo; packages for greater coverage of math commands in
the Rd <code style="white-space: pre;">&#8288;\eqn&#8288;</code> and <code style="white-space: pre;">&#8288;\deqn&#8288;</code> macros.
The <code style="white-space: pre;">&#8288;\mathscr&#8288;</code> LaTeX command is also provided (via the
&lsquo;<span class="samp">&#8288;mathrsfs&#8288;</span>&rsquo; package, if available, or the &lsquo;<span class="samp">&#8288;amsfonts&#8288;</span>&rsquo;
bundle otherwise), fulfilling the wish of <a href="https://bugs.R-project.org/show_bug.cgi?id=18398">PR#18398</a>.
</p>
</li>
<li><p> (Windows) The default format of <code>readClipboard()</code> and
<code>writeClipboard()</code> has been changed to <code>13</code>
(<code>CF_UNICODETEXT</code>).
</p>
</li></ul>




<h4>INSTALLATION on a UNIX-ALIKE</h4>


<ul>
<li><p> The PDF manuals (if built) can be compacted by the new
target <code>make compact-pdf</code> (at the top level or in
directory &lsquo;<span class="file">doc/manual</span>&rsquo;).
</p>
</li>
<li><p> There is now <code>configure</code> support for LLVM clang 15
on Linux, which defaults to position-independent (PIE) executables
whereas <code>gfortran</code> does not.
</p>
</li>
<li><p> Many small changes to ease compilation (and suppress
warnings) with LLVM <code>clang</code> 15.
</p>
</li></ul>




<h4>BUG FIXES</h4>


<ul>
<li> <p><code>Rscript -e</code> would fail if &lsquo;<span class="file">stdin</span>&rsquo; were closed
(Reported by Henrik Bengtsson.)
</p>
</li>
<li> <p><code>qt(*, log.p=TRUE)</code> in outer tails no longer produces
<code>NaN</code> in its final steps, thus fixing <a href="https://bugs.R-project.org/show_bug.cgi?id=18360">PR#18360</a>.
</p>
</li>
<li> <p><code>tools::Rd2latex()</code> now escapes hashes and ampersands
when writing URLs, fixing LaTeX errors with such URLs in <code style="white-space: pre;">&#8288;\tabular&#8288;</code>.
</p>
</li>
<li><p> When <code>isGeneric(f, fdef=*)</code> is used with mismatching
names, the warning is better understandable; reported (with fix) in
<a href="https://bugs.R-project.org/show_bug.cgi?id=18370">PR#18370</a> by Gabe Becker.
</p>
</li>
<li> <p><code>poly(x, n)</code> now works again (and is now documented)
when <code>x</code> is a <code>"Date"</code> or <code>"POSIXct"</code> object, or of
another class while fulfilling <code>mode(x) == "numeric"</code>.  This
also enables <code>poly(x, *, raw=TRUE)</code> for such variables.
Reported by Michael Chirico to R-devel.
</p>
</li>
<li> <p><code>write.table()</code>, <code>write.csv()</code> and
<code>write.csv2()</code> restore their numerical precision (internal
equivalent of <code>digits = 15</code>) after an interrupt (<a href="https://bugs.R-project.org/show_bug.cgi?id=18384">PR#18384</a>).
</p>
</li>
<li><p> One can now read also byte <code>FF</code> from a clipboard connection
(<a href="https://bugs.R-project.org/show_bug.cgi?id=18385">PR#18385</a>).
</p>
</li>
<li> <p><code>source("")</code> and <code>source(character())</code> now give more
helpful error messages.
</p>
</li>
<li> <p><code>R CMD check --as-cran</code> set <span class="env">_R_CHECK_TIMINGS_</span>
too late to have the intended effect.
</p>
</li>
<li> <p><code>as.POSIXlt(x)</code> now also works with very large dates
<code>x</code>, fixing <a href="https://bugs.R-project.org/show_bug.cgi?id=18401">PR#18401</a> reported by Hannes Mühleisen.
</p>
</li>
<li><p> Files can now be extracted even from very large zip archives
(<a href="https://bugs.R-project.org/show_bug.cgi?id=18390">PR#18390</a>, thanks to Martin Jakt).
</p>
</li>
<li><p> Non-finite objects of class <code>"POSIXlt"</code> are now
correctly coerced to classes <code>"Date"</code> and <code>"POSIXct"</code>;
following up on the extension to <code>format()</code> them correctly.
</p>
</li>
<li><p> Added methods for <code>is.finite()</code>, <code>is.infinite()</code>
and <code>is.nan()</code> for <code>"POSIXlt"</code> date-time objects.
</p>
</li></ul>




<h4>BUG FIXES on Windows</h4>


<ul>
<li><p> Non-ASCII characters are now properly displayed on Windows
in windows created using GraphApp via
e.g. <code>winDialogString</code> thanks to a workaround for an
at least surprising Windows behavior with UTF-8 as the system
encoding (<a href="https://bugs.R-project.org/show_bug.cgi?id=18382">PR#18382</a>).
</p>
</li>
<li><p> Find and replace operations work again in the script editor in
<code>Rgui</code> on Windows.
</p>
</li>
<li><p> Computation of window size based on requested client size in
GraphApp when running in a multi-byte locale on Windows has been fixed
(regression in <span class="rlang"><b>R</b></span> 4.2.0 for users of systems where <span class="rlang"><b>R</b></span> 4.1 used a
single-byte locale).  <code>Rgui</code> again respects the number of
console rows and columns given in &lsquo;<span class="file">Rconsole</span>&rsquo; file.
</p>
</li>
<li> <p><code>Rterm</code> support for <code>Alt+xxx</code> sequences has been
fixed to produce the corresponding character (only) once. This fixes
pasting text with tilde on Italian keyboard (PR#18391).
</p>
</li></ul>




<h3><img src="../help/figures/../../html/Rlogo.svg" class="toplogo" alt="[R logo]" /> CHANGES IN R 4.2.1</h3>



<h4>NEW FEATURES</h4>


<ul>
<li><p> New function <code>utils::findCRANmirror()</code> to find out if a
<abbr><span class="acronym">CRAN</span></abbr> mirror has been selected, otherwise fallback to
the main site.  This behaves in the same way as
<code>tools::CRAN_package_db()</code> and is intended for packages
wishing to access <abbr><span class="acronym">CRAN</span></abbr> for purposes other than
installing packages.
</p>
<p>The need for this was shown by a day when the main <abbr><span class="acronym">CRAN</span></abbr>
website was offline and a dozen or so packages which had its URL
hardcoded failed their checks.
</p>
</li></ul>




<h4>INSTALLATION on a UNIX-ALIKE</h4>


<ul>
<li><p> The libraries searched for by <span class="option">--with-blas</span> (without
a value) now include BLIS (after OpenBLAS but before ATLAS).  And
on macOS, the Accelerate framework (after ATLAS).  (This is
patterned after the <code>AX_BLAS</code> macro from the Autoconf Archive.)
</p>
</li>
<li><p> The included LAPACK sources have been updated to 3.10.1.
</p>
</li></ul>




<h4>UTILITIES</h4>


<ul>
<li><p> The (full path to) the command <code>tidy</code> to be used for
HTML validation can be set by environment variable <span class="env">R_TIDYCMD</span>.
</p>
</li>
<li><p> Setting environment variable
<span class="env">_R_CHECK_RD_VALIDATE_RD2HTML_</span> to a false value will override
<code>R CMD check --as-cran</code> and turn off HTML validation.
This provides a way to circumvent a problematic <code>tidy</code>.
</p>
<p>The 2006 version that ships with macOS is always skipped.
</p>
</li></ul>




<h4>C-LEVEL FACILITIES</h4>


<ul>
<li><p> The undocumented legacy declarations of <code>Sint</code>,
<code>Sfloat</code>, <code>SINT_MAX</code> and <code>SINT_MIN</code> in header
&lsquo;<span class="file">R.h</span>&rsquo; are deprecated.
</p>
</li></ul>




<h4>BUG FIXES</h4>


<ul>
<li> <p><code>fisher.test(d)</code> no longer segfaults for &ldquo;large&rdquo;
<code>d</code>; fixing <a href="https://bugs.R-project.org/show_bug.cgi?id=18336">PR#18336</a> by preventing/detecting an integer
overflow reliably.
</p>
</li>
<li> <p><code>tar(., files=*)</code> now produces correctly the warning
about invalid uid or gid of files, fixing <a href="https://bugs.R-project.org/show_bug.cgi?id=18344">PR#18344</a>, reported by
Martin Morgan.
</p>
</li>
<li> <p><code>tk_choose.files()</code> with <code>multi = FALSE</code>
misbehaved on paths containing spaces (<a href="https://bugs.R-project.org/show_bug.cgi?id=18334">PR#18334</a>) (regression
introduced in <span class="rlang"><b>R</b></span> 4.0.0).
</p>
</li>
<li> <p><code>sort(x, partial = ind, *)</code> now works correctly notably for
the non-default <code>na.last = FALSE</code> or <code>TRUE</code>, fixing
<a href="https://bugs.R-project.org/show_bug.cgi?id=18335">PR#18335</a> reported by James Edwards.
</p>
</li>
<li><p> Environment variable <span class="env">_R_CHECK_XREFS_REPOSITORIES_</span> is
only used for checking &lsquo;<span class="file">.Rd</span>&rsquo; cross-references in <code>R
      CMD check</code> (as documented) and not for other uses looking for a
<abbr><span class="acronym">CRAN</span></abbr> mirror.
</p>
</li>
<li><p> The search for a <abbr><span class="acronym">CRAN</span></abbr> mirror when checking
packages now uses <code>getOption("repos")</code> if that specifies a
<abbr><span class="acronym">CRAN</span></abbr> mirror, even when it does not also specify all three
Bioconductor repositories (as was previously required).
</p>
</li>
<li><p> The <abbr><span class="acronym">HTML</span></abbr> code generated by <code>tools::Rd2HTML()</code>
has been improved to pass <code>tidy</code> 5.8.0.
</p>
</li></ul>




<h4>BUG FIXES on Windows</h4>


<ul>
<li><p> Writing to a clipboard connection works again, fixing a
regression in <span class="rlang"><b>R</b></span> 4.2.0 (<a href="https://bugs.R-project.org/show_bug.cgi?id=18332">PR#18332</a>).  Re-using a closed clipboard
connection longer issues a spurious warning about an ignored
encoding argument.
</p>
</li>
<li><p> C function <code>getlocale</code> no longer attempts to query an
unsupported category from the OS, even when requested at R level,
which may cause crashes when <span class="rlang"><b>R</b></span> 4.2.0 (which uses UCRT) is
embedded (reported by Kevin Ushey).
</p>
</li>
<li><p> Accent keys now work in GraphApp Unicode windows, which are
used by <code>Rgui</code> whenever running in a multibyte locale (so
also in UTF-8, hence fixing a regression in <span class="rlang"><b>R</b></span> 4.2.0 for users of
systems where <span class="rlang"><b>R</b></span> 4.1 used a single-byte locale).
</p>
</li>
<li><p> Completion in <code>Rgui</code> now works also with
non-ASCII characters.
</p>
</li>
<li> <p><code>Rgui</code> no longer truncates usage information with
<span class="option">--help</span>.
</p>
</li>
<li><p> Text injection from external applications via
<code>SendInput</code> now works in GraphApp Unicode windows, fixing a
regression in <span class="rlang"><b>R</b></span> 4.2.0 for <code>Rgui</code> users of systems where
<span class="rlang"><b>R</b></span> 4.1 used a single-byte locale but <span class="rlang"><b>R</b></span> 4.2.0 uses UTF-8.
</p>
</li>
<li><p> Performance of <code>txtProgressBar()</code> in <code>Rgui</code> when
running in a multi-byte locale has been improved (fixing a
performance regression in <span class="rlang"><b>R</b></span> 4.2.0 for users of systems where <span class="rlang"><b>R</b></span>
4.1 used a single-byte locale).
</p>
</li>
<li><p> The script editor in <code>Rgui</code> now works also on
systems using UTF-8 as the native encoding.  Users of the script
editor have to convert their scripts with non-ASCII characters to
UTF-8 before reading them in <span class="rlang"><b>R</b></span> 4.2.1 or newer (on recent Windows
where UTF-8 is used).  This fixes a regression in <span class="rlang"><b>R</b></span> 4.2.0, which
prevented some operations with scripts when they contained
non-ASCII characters.
</p>
</li></ul>




<h3><img src="../help/figures/../../html/Rlogo.svg" class="toplogo" alt="[R logo]" /> CHANGES IN R 4.2.0</h3>



<h4>SIGNIFICANT USER-VISIBLE CHANGES</h4>


<ul>
<li><p> The <code>formula</code> method of <code>aggregate()</code> now matches
the generic in naming its first argument <code>x</code> (resolving
<a href="https://bugs.R-project.org/show_bug.cgi?id=18299">PR#18299</a> by Thomas Soeiro).
</p>
<p>This means that calling <code>aggregate()</code> with a formula as a
named first argument requires name <code>formula</code> in earlier
versions of <span class="rlang"><b>R</b></span> and name <code>x</code> now, so portable code should not
name the argument (code in many packages did).
</p>
</li>
<li><p> Calling <code>&amp;&amp;</code> or <code>||</code> with either argument of
length greater than one now gives a warning (which it is intended
will become an error).
</p>
</li>
<li><p> Calling <code>if()</code> or <code>while()</code> with a condition of
length greater than one gives an error rather than a warning.
Consequently, environment variable
<span class="env">_R_CHECK_LENGTH_1_CONDITION_</span> no longer has any effect.
</p>
</li>
<li><p> Windows users should consult the WINDOWS section below for
some profound changes including
</p>

<ul>
<li><p> Support for 32-bit builds has been dropped.
</p>
</li>
<li><p> UTF-8 locales are used where available.
</p>
</li>
<li><p> The default locations for the <span class="rlang"><b>R</b></span> installation and personal
library folder have been changed.
</p>
</li></ul>

<p>Thanks to Tomas Kalibera for months of work on the Windows port
for this release.
</p>
</li></ul>




<h4>NEW FEATURES</h4>


<ul>
<li> <p><code>matrix(x, n, m)</code> now warns in more cases where
<code>length(x)</code> differs from <code>n * m</code>, as suggested by Abby
Spurdle and Wolfgang Huber in Feb 2021 on the R-devel mailing
list.
</p>
<p>This warning can be turned into an error by setting environment
variable <span class="env">_R_CHECK_MATRIX_DATA_</span> to &lsquo;<span class="samp">&#8288;TRUE&#8288;</span>&rsquo;: <code>R
	CMD check --as-cran</code> does so unless it is already set.
</p>
</li>
<li><p> Function <code>file_test()</code> in package <span class="pkg">utils</span> gains
tests for symlinks, readability and writability.
</p>
</li>
<li> <p><code>capabilities("libxml")</code> is now false.
</p>
<p>The description of <code>capabilities("http/ftp")</code> now reflects
that it refers to the default method, no longer the internal one.
</p>
</li>
<li> <p><code>simplify2array()</code> gains an <code>except</code> argument for
controlling the exceptions used by <code>sapply()</code>.
</p>
</li>
<li><p> Environment variables <span class="env">R_LIBS_USER</span> and
<span class="env">R_LIBS_SITE</span> are both now set to the <span class="rlang"><b>R</b></span> system default if
unset or empty, and can be set to <code>NULL</code> to indicate an empty
list of user or site library directories.
</p>
</li>
<li><p> The warning for <code>axis()</code>(-like) calls in cases of relatively
small ranges (typically in log-scale situations) is slightly improved
<em>and</em> suppressed from explicit calls to <code>.axisPars()</code> as
has always been the intention.
</p>
</li>
<li><p> The <code>contrasts</code> setter function <code>`contrasts&lt;-`</code>
gains an explicit default <code>how.many = NULL</code> rather than just
using <code>missing(how.many)</code>.
</p>
</li>
<li> <p><code>grid.pretty()</code> gains a new optional argument <code>n = 5</code>.
</p>
</li>
<li><p> There is a new function <code>.pretty()</code> with option
<code>bounds</code> as a technical-utility version of <code>pretty()</code>.  It
and <code>pretty()</code> gain a new argument <code>f.min</code> with a better
than back-compatible default.
</p>
</li>
<li><p> Function <code>grDevices::axisTicks()</code> and related functions
such as <code>graphics::axis()</code> work better, notably for the log
scale; partly because of the <code>pretty()</code> improvements, but also
because care is taken e.g., when <code>ylim</code> is finite but
<code>diff(ylim)</code> is infinite.
</p>
</li>
<li> <p><code>nclass.FD()</code> gains a <code>digits</code> option.
</p>
</li>
<li><p> The R Mathlib internal C function <code>bd0()</code> (called
indirectly from a dozen probability density and distribution
functions such as <code>dpois()</code>, <code>dbinom()</code>,
<code>dgamma()</code>, <code>pgamma()</code> <em>etc</em>) has been complemented
by a more sophisticated and (mostly) more accurate C function
<code>ebd0()</code>, currently called only by internal
<code>dpois_raw()</code> improving accuracy for <span class="rlang"><b>R</b></span> level <code>dpois()</code>
and potentially others calling it such as <code>dnbinom()</code>,
<code>dgamma()</code> or <code>pgamma()</code>.  (Thanks to Morten Welinder's
<a href="https://bugs.R-project.org/show_bug.cgi?id=15628">PR#15628</a>.)
</p>
</li>
<li> <p><code>write.ftable()</code> gains <code>sep = " "</code> argument as
suggested by Thomas Soeiro.
</p>
</li>
<li><p> The names of the locale categories supported by <span class="rlang"><b>R</b></span>'s
<code>Sys.getlocale()</code> and <code>Sys.setlocale()</code> are now provided
by variable <code>.LC.categories</code> in the <code>base</code> namespace.
</p>
</li>
<li><p> The <code>Date</code> and <code>POSIXt</code> methods for <code>hist()</code>
and the <code>histogram</code> method for <code>plot()</code> now also use the
new default <code>col = "lightgray"</code> in consistency with the
corresponding change to <code>hist()</code>'s default for <span class="rlang"><b>R</b></span> 4.0.0.
</p>
</li>
<li> <p><code>hist.default()</code> gains new <code>fuzz</code> argument, and the
histogram <code>plot</code> method no longer uses fractional axis ticks
when displaying counts (<code>"Frequency"</code>).
</p>
</li>
<li> <p><code>mapply()</code> and hence <code>Map()</code> now also obey the
&ldquo;max-or-0-if-any&rdquo; recycling rule, such that, e.g.,
<code>Map(`+`, 1:3, 1[0])</code> is valid now.
</p>
</li>
<li> <p><code>as.character(&lt;obj&gt;)</code> for <code>"hexmode"</code> or
<code>"octmode"</code> objects now fulfils the important basic rule
<code>as.character(x)[j] === as.character(x[j])</code>.
</p>
</li>
<li><p> The set utility functions, notably <code>intersect()</code> have been
tweaked to be more consistent and symmetric in their two set
arguments, also preserving a common <code>mode</code>.
</p>
</li>
<li> <p><code>substr(ch, start,end) &lt;- new</code> now e.g., preserves
<code>names(ch)</code>; ditto for <code>substring()</code>, thanks to a patch
from Brodie Gaslam.
</p>
</li>
<li> <p><code>plot(&lt;lm&gt;)</code> gains a <code>extend.ylim.f</code> argument, in
partial response to <a href="https://bugs.R-project.org/show_bug.cgi?id=15285">PR#15285</a>; further <a href="https://bugs.R-project.org/show_bug.cgi?id=17784">PR#17784</a> is fixed thanks to
several contributors and a patch by Elin Waring.
The Cook's dist contours get customizable via <code>cook.col</code> and
<code>cook.lty</code> with a different default color and their legend is
nicer by default and customizable via <code>cook.legendChanges</code>.
</p>
</li>
<li><p> Attempting to subset an object that is not subsettable now
signals an error of class <code>notSubsettableError</code>. The
non-subsettable object is contained in the <code>object</code> field of
the error condition.
</p>
</li>
<li><p> Subscript-out-of-bounds errors are now signaled as errors of
class <code>subscriptOutOfBoundsError</code>.
</p>
</li>
<li><p> Stack-overflow errors are now signaled as errors inheriting
from class <code>stackOverflowError</code>. See
<code>?stackOverflowError</code> for more details.
</p>
</li>
<li><p> New partly experimental <code>Sys.setLanguage()</code> utility,
solving the main problem of <a href="https://bugs.R-project.org/show_bug.cgi?id=18055">PR#18055</a>.
</p>
</li>
<li> <p><code>gettext()</code> and <code>gettextf()</code> get a new option
<code>trim = TRUE</code> which when set to false allows translations for
strings such as <code>"Execution halted\n"</code> typical for C code.
</p>
</li>
<li><p> An experimental implementation of hash tables is now
available.  See <code>?hashtab</code> for more details.
</p>
</li>
<li> <p><code>identical()</code> gains a <code>extptr.as.ref</code> argument for
requesting that external pointer objects be compared as reference
objects.
</p>
</li>
<li> <p><code>reorder()</code> gets an argument <code>decreasing</code> which it
passes to <code>sort()</code> for level creation; based on the wish and
patch by Thomas Soeiro in <a href="https://bugs.R-project.org/show_bug.cgi?id=18243">PR#18243</a>.
</p>
</li>
<li> <p><code>as.vector()</code> gains a <code>data.frame</code> method which
returns a simple named list, also clearing a long standing
&lsquo;FIXME&rsquo; to enable <code>as.vector(&lt;data.frame&gt;,
      mode="list")</code>.  This breaks code relying on
<code>as.vector(&lt;data.frame&gt;)</code> to return the unchanged data frame.
</p>
</li>
<li> <p><code>legend()</code> is now vectorized for arguments <code>cex</code>,
<code>x.intersp</code>, and <code>text.width</code>.
The latter can now also be specified as a vector (one element for
each column of the legend) or as <code>NA</code> for computing a proper
column wise maximum value of <code>strwidth(legend)</code>.
The argument <code>y.intersp</code> can be specified as a vector with
one entry for each row of the legend.
</p>
<p><code>legend()</code> also gains new arguments <code>title.cex</code> and
<code>title.font</code>. Thanks to Swetlana Herbrandt.
</p>
</li>
<li><p> Deparsing no longer remaps attribute names <code>dim</code>,
<code>dimnames</code>, <code>levels</code>, <code>names</code> and <code>tsp</code> to
historical S-compatible names (which <code>structure()</code> maps back).
</p>
</li>
<li> <p><code>sample()</code> and <code>sample.int()</code> have additional
sanity checks on their <code>size</code> and <code>n</code> arguments.
</p>
<p><code>all.equal.numeric()</code> gains a sanity check on its
<code>tolerance</code> argument &ndash; calling <code>all.equal(a, b, c)</code> for
three numeric vectors is a surprisingly common error.
</p>
<p><code>mean(na.rm =)</code>, <code>rank(na.last =)</code>,
<code>barplot(legend.text =)</code>, <code>boxplot()</code>,
<code>contour(drawlabels =)</code>, <code>polygon(border =)</code> and
<code>methods::is(class2 =)</code> have more robust sanity checks on
their arguments.
</p>
<p><code>R CMD Rd2pdf</code> (used by <code>R CMD check</code>) has a more
robust sanity check on the format of <code>\alias{}</code> commands.
</p>
</li>
<li> <p><code>psigamma(x, deriv)</code> for negative <code>x</code> now also works
for <code>deriv = 4</code> and <code>5</code>; their underlying C level
<code>dpsifn()</code> is documented in &lsquo;Writing R Extensions&rsquo;.
</p>
</li>
<li><p> The HTML help system now uses HTML5 (wish of <a href="https://bugs.R-project.org/show_bug.cgi?id=18149">PR#18149</a>).
</p>
</li>
<li> <p><code>ks.test()</code> now provides exact p-values also with ties
and MC p-values in the two-sample (Smirnov) case.  By Torsten
Hothorn.
</p>
</li>
<li> <p><code>ks.test()</code> gains a formula interface, with <code>y ~ 1</code>
for the one-sample (Kolmogorov) test and <code>y ~ group</code> for the
two-sample (Smirnov) test.  Contributed by Torsten Hothorn.
</p>
</li>
<li><p> The return value from <code>ks.test()</code> now has class
<code>c("ks.test", "htest")</code> &ndash; packages using <code>try()</code> need
to take care to use <code>inherits()</code> and not <code>==</code> on the class.
</p>
</li>
<li><p> New functions <code>psmirnov()</code>, <code>qsmirnov()</code> and
<code>rsmirnov()</code> in package <span class="pkg">stats</span> implementing the
asymptotic and exact distributions of the two-sample Smirnov statistic.
</p>
</li>
<li> <p><code>iconv()</code> now allows <code>sub = "c99"</code> to use C99-style
escapes for UTF-8 inputs which cannot be converted to encoding <code>to</code>.
</p>
</li>
<li><p> In a forward pipe <code>|&gt;</code> expression it is now possible to
use a named argument with the placeholder <code>_</code> in
the <code>rhs</code> call to specify where the <code>lhs</code> is to be
inserted.  The placeholder can only appear once on the <code>rhs</code>.
</p>
</li>
<li><p> The included LAPACK sources have been updated to version 3.10.0,
except for the four Fortran 77 routines which 3.10.0 has
re-implemented in Fortran 90 (where the older versions have been
retained as the <span class="rlang"><b>R</b></span> build process does not support Fortran 90).
</p>
</li>
<li> <p><code>path.expand()</code> and most other uses of tilde expansion now
warn if a path would be too long if expanded.  (An exception is
<code>file.exists()</code>, which silently returns false.)
</p>
</li>
<li> <p><code>trunc(&lt;Date&gt;, *)</code> now supports <code>units = "months"</code>
or <code>"years"</code> for consistency with the <code>POSIXt</code> method,
thanks to Dirk Eddelbuettel's proposal in <a href="https://bugs.R-project.org/show_bug.cgi?id=18099">PR#18099</a>.
</p>
</li>
<li> <p><code>list2DF()</code> now checks that its arguments are of the
same length, rather than use recycling.
</p>
</li>
<li><p> The HTML help system has several new features: LaTeX-like
math can be typeset using either <a href="https://katex.org/">KaTeX</a>
or <a href="https://www.mathjax.org/">MathJax</a>, usage and example
code is highlighted using <a href="https://prismjs.com">Prism</a>, and
for dynamic help the output of examples and demos can be shown
within the browser if the <a href="https://CRAN.R-project.org/package=knitr"><span class="pkg">knitr</span></a> package is
installed. These features can be disabled by setting the
environment variable <code>_R_HELP_ENABLE_ENHANCED_HTML_</code> to a
false value.
</p>
</li></ul>




<h4>GRAPHICS</h4>


<ul>
<li><p> The graphics engine version, <code>R_GE_version</code>, has been
bumped to <code>15</code> and so packages that provide graphics devices
should be reinstalled.
</p>
</li>
<li><p> The <span class="pkg">grid</span> package now allows the user to specify a
&ldquo;vector&rdquo; of pattern fills.  The <code>fill</code> argument
to <code>gpar()</code> accepts a list of gradients and/or patterns and
the functions <code>linearGradient()</code>, <code>radialGradient()</code>,
and <code>pattern()</code> have a new <code>group</code> argument.
</p>
<p>Points grobs (data symbols) can now also have a pattern fill.
</p>
<p>The <code>grobCoords()</code> function now returns a more informative
and complex result.
</p>
</li>
<li><p> The <span class="pkg">grid</span> package has new functions for drawing
isolated groups: <code>grid.group()</code>, <code>grid.define()</code>, and
<code>grid.use()</code>.  These functions add compositing operators and
affine transformations to R's graphics capabilities.
</p>
<p>The <span class="pkg">grid</span> package also has new functions for stroking
and filling paths:  <code>grid.stroke()</code>, <code>grid.fill()</code>,
and <code>grid.fillStroke()</code>.
</p>
<p>A new function <code>as.path()</code> allows the user to specify the
fill rule for a path that is to be used for clipping, stroking, or
filling; available options are <code>"winding"</code> and
<code>"evenodd"</code>.  A new function <code>as.mask()</code> allows the user
to specify the type of a mask; available options are
<code>"alpha"</code> and <code>"luminance"</code>.
</p>
<p>These new features are only supported so far (at most) on the
Cairo-based graphics devices and on the <code>pdf()</code> device.
</p>
</li>
<li> <p><code>dev.capabilities()</code> reports on device support
for the new features.
</p>
</li>
<li> <p><code>par()</code> now warns about unnamed non-character arguments
to prevent misuse such as <code>{usr &lt;- par("usr"); par(usr)}</code>.
</p>
</li></ul>




<h4>WINDOWS</h4>


<ul>
<li> <p><span class="rlang"><b>R</b></span> uses UTF-8 as the native encoding on recent Windows
systems (at least Windows 10 version 1903, Windows Server 2022 or
Windows Server 1903).  As a part of this change, R uses UCRT as
the C runtime.  UCRT should be installed manually on systems older
than Windows 10 or Windows Server 2016 before installing <span class="rlang"><b>R</b></span>.
</p>
</li>
<li><p> The default personal library on Windows, folder
&lsquo;<span class="file">R\win-library\x.y</span>&rsquo; where &lsquo;<span class="file">x.y</span>&rsquo; stands for <span class="rlang"><b>R</b></span> release
&lsquo;<span class="file">x.y.z</span>&rsquo;, is now a subdirectory of Local Application Data
directory (usually a hidden directory
&lsquo;<span class="file">C:\Users\username\AppData\Local</span>&rsquo;).  Use
<code>shell.exec(.libPaths()[1])</code> from <span class="rlang"><b>R</b></span> to open the personal
library in Explorer when it is first in the list (<a href="https://bugs.R-project.org/show_bug.cgi?id=17842">PR#17842</a>).
</p>
</li>
<li> <p><span class="rlang"><b>R</b></span> uses a new 64-bit Tcl/Tk bundle.  The previous
32-bit/64-bit bundle had a different layout and can no longer be
used.
</p>
</li>
<li><p> Make files and installer scripts for Windows have been
tailored to &lsquo;<span class="file">Rtools42</span>&rsquo;, the newly recommended 64-bit
<code>gcc</code> 10.3 MinGW-W64 UCRT toolchain.
</p>
</li>
<li> <p>&lsquo;<span class="file">Rtools42</span>&rsquo; by default uses the Windows security
features ASLR and DEP; hence <abbr><span class="acronym">CRAN</span></abbr> builds of <span class="rlang"><b>R</b></span> and packages also
do.
</p>
</li>
<li> <p><span class="rlang"><b>R</b></span> now supports files &lsquo;<span class="file">Makevars.ucrt</span>&rsquo;,
&lsquo;<span class="file">Makefile.ucrt</span>&rsquo;, &lsquo;<span class="file">configure.ucrt</span>&rsquo; and
&lsquo;<span class="file">cleanup.ucrt</span>&rsquo; in packages, which are used in preference to
the &lsquo;<span class="file">.win</span>&rsquo; variants.  This allows keeping the &lsquo;<span class="file">.win</span>&rsquo;
files around to support older versions of <span class="rlang"><b>R</b></span>.  This feature will
be removed in the future once support for older versions of <span class="rlang"><b>R</b></span>
would no longer be needed.
</p>
</li>
<li> <p><code>R.version</code> gains a new field <code>crt</code> (only on
Windows) to denote the C runtime.  The value is <code>"ucrt"</code>.
</p>
</li>
<li><p> On Windows, <code>download.file(method = "auto")</code> and
<code>url(method = "default")</code> now follow Unix in using
<code>"libcurl"</code> for all except &lsquo;<span class="samp">&#8288;file://&#8288;</span>&rsquo; URIs.
</p>
</li>
<li> <p>&lsquo;<span class="file">Rtools42</span>&rsquo; includes an unpatched Msys2 build of GNU
<code>tar</code>.  Paths including drive letters can be made to work
by adding <span class="option">--force-local</span> to environment variable
<span class="env">TAR_OPTIONS</span>.  (&lsquo;<span class="file">Rtools40</span>&rsquo; and earlier included a
patched version which defaulted to this option.)
</p>
</li>
<li><p> Installer builds of <span class="rlang"><b>R</b></span> automatically find the
&lsquo;<span class="file">Rtools42</span>&rsquo; software collection as well as the compiler
toolchain.  No <span class="env">PATH</span> setting is required from the user.
</p>
</li>
<li><p> The default installation directory of R for a user-only
installation has been changed to the User Program Files directory
(usually a hidden directory
&lsquo;<span class="file">C:\Users\username\AppData\Local\Programs</span>&rsquo;) to follow
Windows conventions.  Use <code>shell.exec(R.home())</code> from <span class="rlang"><b>R</b></span> to
open the <span class="rlang"><b>R</b></span> installation directory in Explorer (<a href="https://bugs.R-project.org/show_bug.cgi?id=17842">PR#17842</a>).
</p>
</li>
<li> <p><span class="rlang"><b>R</b></span> now supports installation-time patching of packages.
Patches may be installed from a supplied URL or a local directory
or disabled.  Patches are included into the installed packages for
reference.  This experimental feature may be removed in the
future.
</p>
</li>
<li> <p><code>libcurl</code> is now required for building from source.
</p>
</li>
<li><p> The clipboard connection now works also with text in other
than the current native encoding (<a href="https://bugs.R-project.org/show_bug.cgi?id=18267">PR#18267</a>, with Hiroaki
Yutani).  Text is always pasted to the clipboard  in UTF16-LE and
the <code>encoding</code> argument is ignored.
</p>
</li>
<li><p> The internal case-changing functions are now used by default
on Windows &ndash; this circumvents problems (for example with E acute)
of the UCRT Windows' runtime.
</p>
</li>
<li> <p><span class="rlang"><b>R</b></span> on Windows now uses the system memory allocator.  Doug
Lea's allocator was used since <span class="rlang"><b>R</b></span> 1.2.0 to mitigate performance
limitations seen with system allocators on earlier versions of
Windows.
</p>
</li>
<li> <p><code>memory.limit()</code> and <code>memory.size()</code> are now stubs on
Windows (as on Unix-alikes).
</p>
</li>
<li><p> Applications embedding <span class="rlang"><b>R</b></span> on Windows can now use additional
callbacks, which have so far only been available only on Unix
(<a href="https://bugs.R-project.org/show_bug.cgi?id=18286">PR#18286</a>).
</p>
</li></ul>




<h4>INSTALLATION</h4>


<ul>
<li><p> Facilities for accessing &lsquo;<span class="samp">&#8288;ftp://&#8288;</span>&rsquo; sites are no longer
tested (except <em>pro tem</em> for <code>curlGetHeaders()</code>) as modern
browsers have removed support.

</p>
</li>
<li> <p><span class="rlang"><b>R</b></span> can now be built with &lsquo;<span class="samp">&#8288;DEFS = -DSTRICT_R_HEADERS&#8288;</span>&rsquo; .
</p>
</li></ul>




<h4>PACKAGE INSTALLATION</h4>


<ul>
<li> <p><code>R CMD INSTALL</code> no longer tangles vignettes. This
completes an <code>R CMD build</code> change in <span class="rlang"><b>R</b></span> 3.0.0 and affects
packages built before <span class="rlang"><b>R</b></span> 3.0.2. Such packages should be re-made
with <code>R CMD build</code> to have the tangled <span class="rlang"><b>R</b></span> code of vignettes
shipped with the tarball.
</p>
</li>
<li> <p><code>USE_FC_LEN_T</code> will become the default: this uses the
correct prototypes for Fortran BLAS/LAPACK routines called from
C/C++, and requires adjustment of most such calls &ndash; see
&lsquo;Writing R Extensions&rsquo; §6.6.1.   (This has been supported
since <span class="rlang"><b>R</b></span> 3.6.2.)
</p>
</li>
<li><p> Package installation speed for packages installed with
<code>keep.source</code> has been improved. This resolve the issue
reported by Ofek Shilon in <a href="https://bugs.R-project.org/show_bug.cgi?id=18236">PR#18236</a>.
</p>
</li></ul>




<h4>UTILITIES</h4>


<ul>
<li> <p><code>R CMD check</code> can optionally report
files/directories left behind in home, &lsquo;<span class="file">/tmp</span>&rsquo; (even though
<span class="env">TMPDIR</span> is set) and other directories.  See the &ldquo;R
Internals&rdquo; manual for details.
</p>
</li>
<li> <p><code>R CMD check</code> now reports byte-compilation errors
during installation.  These are not usually fatal but may result
in parts of the package not being byte-compiled.
</p>
</li>
<li> <p><span class="env">_R_CHECK_DEPENDS_ONLY_</span> can be applied selectively to
examples, tests and/or vignettes in <code>R CMD check</code>: see the
&ldquo;R Internals&rdquo; manual.
</p>
</li>
<li> <p><span class="env">_R_CHECK_SRC_MINUS_W_IMPLICIT_</span> now defaults to true:
recent versions of Apple <code>clang</code> on macOS have made
implicit function declarations in C into a compilation error.
</p>
</li>
<li> <p><code>R CMD check --as-cran</code> makes use of the
environment variable <span class="env">AUTORECONF</span>.  See the
&ldquo;R Internals&rdquo; manual §8 for further details.
</p>
</li>
<li> <p><code>R CMD check --use-valgrind</code> also uses
<code>valgrind</code> when re-building vignettes as some non-Sweave
vignettes unhelpfully comment out all their code when
<code>R CMD check</code> runs vignettes.
</p>
</li>
<li><p> Errors in re-building vignettes (unless there are LaTeX
errors) are reported by <code>R CMD check</code> as &lsquo;<span class="samp">&#8288;ERROR&#8288;</span>&rsquo; rather
than &lsquo;<span class="samp">&#8288;WARNING&#8288;</span>&rsquo; when running vignettes has been skipped (as it
frequently is in <abbr><span class="acronym">CRAN</span></abbr> checks and by <span class="option">--as-cran</span>).
</p>
</li>
<li> <p><code>R CMD Rd2pdf</code> gains a <span class="option">--quiet</span> option that is
used by <code>R CMD build</code> when building the PDF package manual.
</p>
</li>
<li> <p><code>R CMD Rd2pdf</code> now always runs LaTeX in batch mode,
consistent with Texinfo <code class="reqn">\ge</code> 6.7. The <span class="option">--batch</span>
option is ignored.
</p>
</li>
<li> <p><code>R CMD build</code> and <code>R CMD check</code> now include
the Rd file name and line numbers in the error message of an
<code style="white-space: pre;">&#8288;\Sexpr&#8288;</code> evaluation failure.
</p>
</li>
<li><p> For packages using the <code style="white-space: pre;">&#8288;\doi&#8288;</code> Rd macro (now an
install-time <code style="white-space: pre;">&#8288;\Sexpr&#8288;</code>) but no other dynamic Rd content,
<code>R CMD build</code> now produces a smaller tarball and is
considerably faster &ndash; skipping temporary package installation.
</p>
</li>
<li> <p><code>R CMD check</code> can optionally (but included in
<span class="option">--as-cran</span>) validate the HTML produced from the packages
&lsquo;<span class="file">.Rd</span>&rsquo; files.  See
<a href="https://blog.r-project.org/2022/04/08/enhancements-to-html-documentation/">https://blog.r-project.org/2022/04/08/enhancements-to-html-documentation/</a>:
this needs a fairly recent version of HTML Tidy to be available.
</p>
</li></ul>




<h4>C-LEVEL FACILITIES</h4>


<ul>
<li><p> The non-API header &lsquo;<span class="file">R_ext/R-ftp-http.h</span>&rsquo; is no longer
provided, as the entry points it covered are now all defunct.
</p>
</li>
<li><p> A number of non-API declarations and macro definitions have
been moved from the installed header &lsquo;<span class="file">Rinternals.h</span>&rsquo; to the
internal header &lsquo;<span class="file">Defn.h</span>&rsquo;. Packages that only use entry points
and definitions documented to be part of the API as specified in
&lsquo;Writing R Extensions&rsquo; §6 should not be affected.
</p>
</li>
<li><p> The macro <code>USE_RINTERNALS</code> no longer has any effect
when compiling package code.  Packages which also use
<code>R_NO_REMAP</code> will need to ensure that the remapped names are
used for calls to API functions that were formerly also made
available as macros.
</p>
</li>
<li><p> The deprecated legacy S-compatibility macros <code>PROBLEM</code>,
<code>MESSAGE</code>, <code>ERROR</code>, <code>WARN</code>, <code>WARNING</code>,
<code>RECOVER</code>, ... are no longer defined in
&lsquo;<span class="file">R_exts/RS.h</span>&rsquo; (included by &lsquo;<span class="file">R.h</span>&rsquo;).  Replace these by
calls to <code>Rf_error</code> and <code>Rf_warning</code> (defined in header
&lsquo;<span class="file">R_ext/Error.h</span>&rsquo; included by &lsquo;<span class="file">R.h</span>&rsquo;).
</p>
<p>Header &lsquo;<span class="file">R_ext/RS.h</span>&rsquo; no longer includes &lsquo;<span class="file">R_ext/Error.h</span>&rsquo;.
</p>
</li>
<li><p> Header &lsquo;<span class="file">R_ext/Constants.h</span>&rsquo; (included by &lsquo;<span class="file">R.h</span>&rsquo;)
when included from C++ now includes the C++ header &lsquo;<span class="file">cfloat</span>&rsquo;
rather than the C header &lsquo;<span class="file">float.h</span>&rsquo; (now possible as C++11 is
required).
</p>
</li>
<li><p> The legacy S-compatibility macros <code>DOUBLE_*</code> in
&lsquo;<span class="file">R_ext/Constants.h</span>&rsquo; (included by &lsquo;<span class="file">R.h</span>&rsquo;) are deprecated.
</p>
</li>
<li><p> The deprecated S-compatibility macros <code>SINGLE_*</code> in
&lsquo;<span class="file">R_ext/Constants.h</span>&rsquo; (included by &lsquo;<span class="file">R.h</span>&rsquo;) have been
removed.
</p>
</li>
<li> <p><code>R_Calloc</code>, <code>R_Free</code> and <code>R_Realloc</code> are
preferred to their unprefixed forms and error messages now use the
prefix. These forms were introduced in <span class="rlang"><b>R</b></span> 3.4.0 and are available
even when <code>STRICT_R_HEADERS</code> is defined.
</p>
</li>
<li> <p><code>rmultinom</code> has been documented in &lsquo;Writing R
Extensions&rsquo; §6 so is now part of the <span class="rlang"><b>R</b></span> API.
</p>
</li>
<li><p> Similarly, <code>Rtanpi</code>, called from <span class="rlang"><b>R</b></span> level <code>tanpi()</code>
is now part of the <span class="rlang"><b>R</b></span> API.
</p>
</li>
<li><p> The long-deprecated, undocumented and non-API entry point
<code>call_R</code> is no longer declared in &lsquo;<span class="file">R_ext/RS.h</span>&rsquo; (included
by &lsquo;<span class="file">R.h</span>&rsquo;).
</p>
</li>
<li><p> The header &lsquo;<span class="file">S.h</span>&rsquo; which has been unsupported since Jan
2016 has been removed.   Use &lsquo;<span class="file">R.h</span>&rsquo; instead.
</p>
</li></ul>




<h4>DEPRECATED AND DEFUNCT</h4>


<ul>
<li><p> The (non-default and deprecated) <code>method = "internal"</code>
for <code>download.file()</code> and <code>url()</code> no longer supports
&lsquo;<span class="samp">&#8288;http://&#8288;</span>&rsquo; nor &lsquo;<span class="samp">&#8288;ftp://&#8288;</span>&rsquo; URIs.  (It is used only for
&lsquo;<span class="samp">&#8288;file://&#8288;</span>&rsquo; URIs.)
</p>
<p>On Windows, <code>download.file(method = "wininet")</code> no longer
supports &lsquo;<span class="samp">&#8288;ftp://&#8288;</span>&rsquo; URIs.  (It is no longer the default method,
which is <code>"libcurl"</code> and does.)
</p>
<p>On Windows, the deprecated <code>method = "wininet"</code> now gives a
warning for &lsquo;<span class="samp">&#8288;http://&#8288;</span>&rsquo; and &lsquo;<span class="samp">&#8288;https://&#8288;</span>&rsquo; URIs for both
<code>download.file()</code> and <code>url()</code>. (It is no longer the default
method.)
</p>
</li>
<li><p> On Windows, the command-line option <span class="option">--max-mem-size</span>
and environment variable <span class="env">R_MAX_MEM_SIZE</span> are defunct.  The
memory allocation limit was important for 32-bit builds,
but these are no longer supported.
</p>
</li>
<li> <p><code>default.stringsAsFactors()</code> is now formally deprecated,
where that was only mentioned on its regular help page,
previously.  So it now gives a warning if called.
</p>
</li>
<li> <p><code>unix.time()</code> is defunct now; it had been deprecated since
<span class="rlang"><b>R</b></span> 3.4.0.
</p>
</li></ul>




<h4>BUG FIXES</h4>


<ul>
<li><p> Setting <code>digits = 0</code> in <code>format()</code>,
<code>print.default()</code> (and hence typically <code>print()</code>) or
<code>options()</code> is again invalid.  Its behaviour was
platform-dependent, and it is unclear what &ldquo;zero
significant digits&rdquo; should mean (<a href="https://bugs.R-project.org/show_bug.cgi?id=18098">PR#18098</a>).
</p>
</li>
<li><p> Messages from C code in the &lsquo;<span class="file">cairo</span>&rsquo; section of package
<span class="pkg">grDevices</span> are now also offered for translation, thanks to
Michael Chirico's <a href="https://bugs.R-project.org/show_bug.cgi?id=18123">PR#18123</a>.
</p>
</li>
<li> <p><code>mean(x)</code> with finite <code>x</code> now is finite also without
&quot;long.double&quot; capability.
</p>
</li>
<li> <p><code>R CMD Rd2pdf</code> no longer leaves an empty build
directory behind when it aborts due to an already existing output
file.  (Thanks to Sebastian Meyer's <a href="https://bugs.R-project.org/show_bug.cgi?id=18141">PR#18141</a>.)
</p>
</li>
<li> <p><code>density(x, weights = w, na.rm = TRUE)</code> when <code>anyNA(x)</code>
is true, now removes weights &ldquo;in parallel&rdquo; to <code>x</code>, fixing
<a href="https://bugs.R-project.org/show_bug.cgi?id=18151">PR#18151</a>, reported by Matthias Gondan.
Additionally, it gets a <code>subdensity</code> option.
</p>
</li>
<li><p> Conversion of <code style="white-space: pre;">&#8288;\Sexpr[]{&lt;expR&gt;}&#8288;</code> to LaTeX or HTML no longer
produces long blocks of empty lines when <code>&lt;expR&gt;</code> itself
contains several lines all producing empty output.  Thanks to a
report and patch by Ivan Krylov posted to R-devel.
</p>
</li>
<li> <p><code>R CMD build</code> no longer fails if a package vignette
uses child documents and &lsquo;<span class="file">inst/doc</span>&rsquo; exists.  (Thanks to
Sebastian Meyer's <a href="https://bugs.R-project.org/show_bug.cgi?id=18156">PR#18156</a>.)
</p>
</li>
<li><p> When an R documentation (&lsquo;help&rsquo; source) file
&lsquo;<span class="file">man/foo.Rd</span>&rsquo; in a package has <code style="white-space: pre;">&#8288;\donttest{..}&#8288;</code> examples
with a syntax error, it is now signalled as ERROR and with correct
line numbers relating to the &lsquo;<span class="file">*-Ex.R</span>&rsquo; file, thanks to Duncan
Murdoch and Sebastian Meyer's reports and patch proposals in
<a href="https://bugs.R-project.org/show_bug.cgi?id=17501">PR#17501</a>.
</p>
</li>
<li><p> Improved determination of the correct translation domain in
non-base packages, addressing the combination of <a href="https://bugs.R-project.org/show_bug.cgi?id=18092">PR#18092</a> and
<a href="https://bugs.R-project.org/show_bug.cgi?id=17998">PR#17998</a> (<code>#c6</code>) with reports and <em>augmented</em> patch
#2904 by Suharto Anggono.
</p>
<p>Note that <code>"R-base"</code> is no longer the default domain e.g.,
for top-level calls to <code>gettext()</code>; rather translation needs
explicit <code>domain = *</code> specification in such cases.
</p>
</li>
<li> <p><code>identical(attrib.as.set=FALSE)</code> now works correctly with
data frames with default row names (Thanks to Charlie Gao's
<a href="https://bugs.R-project.org/show_bug.cgi?id=18179">PR#18179</a>).
</p>
</li>
<li> <p><code>txtProgressBar()</code> now enforces a non-zero width for
argument <code>char</code>, without which no progress can be visible.
</p>
</li>
<li> <p><code>dimnames(table(d))</code> is more consistent in the case where
<code>d</code> is a list with a single component, thanks to Thomas Soeiro's
report to R-devel.
</p>
<p>Further, <code>table(d1, d2)</code> now gives an error when <code>d1</code> and
<code>d2</code> are data frames as suggested by Thomas in <a href="https://bugs.R-project.org/show_bug.cgi?id=18224">PR#18224</a>.
</p>
</li>
<li><p> Fix for drawing semi-transparent lines and fills on the
native Windows graphics device (<a href="https://bugs.R-project.org/show_bug.cgi?id=18219">PR#18219</a> and <a href="https://bugs.R-project.org/show_bug.cgi?id=16694">PR#16694</a>).
Thanks to Nick Ray for helpful diagnosis on Bugzilla.
</p>
</li>
<li><p> The deparser now wraps sub-expressions such as <code>if(A) .. </code>
with parentheses when needed; thanks to Duncan Murdoch's <a href="https://bugs.R-project.org/show_bug.cgi?id=18232">PR#18232</a>
and Lionel Henry's patches there.
</p>
</li>
<li> <p><code>remove.packages()</code> no longer tries to uninstall
<code>Priority: base</code> packages, thanks to a report and suggestions
by Colin Fay in <a href="https://bugs.R-project.org/show_bug.cgi?id=18227">PR#18227</a>.
</p>
</li>
<li> <p><code>win.metafile()</code> now has <code>xpinch</code> and
<code>ypinch</code> arguments so that the user can override Windows'
(potentially wrong) guess at device dimensions.
</p>
</li>
<li> <p><code>x[i]</code> and <code>x[[i]]</code> for non-integer <code>i</code>
should now behave in all cases as always documented: the index used is
equivalent to <code>as.integer(i)</code> unless that would overflow where
<code>trunc(i)</code> is used instead; thanks to Suharto Anggono's report
and patch proposals in <a href="https://bugs.R-project.org/show_bug.cgi?id=17977">PR#17977</a>.
</p>
</li>
<li> <p><code>asOneSidedFormula()</code> now associates the resulting
formula with the global environment rather than the evaluation
environment created for the call.
</p>
</li>
<li> <p><code>&lt;bibentry&gt;$name</code> now matches the field name
case-insensitively, consistent with <code>bibentry()</code> creation and
the replacement method.
</p>
</li>
<li> <p><code>cbind()</code> failed to detect some length mismatches with
a mixture of time-series and non-time-series inputs.
</p>
</li>
<li><p> The default LaTeX style file &lsquo;<span class="file">Sweave.sty</span>&rsquo; used by the
<code>RweaveLatex</code> driver no longer loads the obsolete &lsquo;<span class="samp">&#8288;ae&#8288;</span>&rsquo;
package; thanks to a report by Thomas Soeiro in <a href="https://bugs.R-project.org/show_bug.cgi?id=18271">PR#18271</a>.
Furthermore, it now skips &lsquo;<span class="samp">&#8288;\usepackage[T1]{fontenc}&#8288;</span>&rsquo; for
engines other than pdfTeX (if detected) or if the new
&lsquo;<span class="samp">&#8288;[nofontenc]&#8288;</span>&rsquo; option is used.
</p>
</li>
<li> <p><code>smooth.spline()</code> now stores its logical <code>cv</code>
argument more safely, fixing a rare bug when printing, and also
stores <code>n</code>.
</p>
</li>
<li> <p><code>smooth.spline(x,y,*)</code> now computes the <code>cv.crit</code>
statistic correctly, also when <code>is.unsorted(x)</code>, fixing
<a href="https://bugs.R-project.org/show_bug.cgi?id=18294">PR#18294</a>.
</p>
</li>
<li><p> The <code>data.frame</code> method of <code>rbind()</code> now warns
when binding not-wholly-recycling vectors, by analogy to the default
method (for matrices).
</p>
</li>
<li> <p><code>setAs()</code> finds the correct class for name <code>to</code>
when multiple packages define a class with that name. Thanks to
Gabor Csardi for the report.
</p>
</li>
<li><p> Fix for detaching a package when two classes of the same name
are present in method signatures for the same generic. Thanks to
Gabor Csardi for the report.
</p>
</li>
<li> <p><code>match.arg("", c("", "a", "B"))</code> gives a better error
message, in part from <a href="https://bugs.R-project.org/show_bug.cgi?id=17959">PR#17959</a>, thanks to Elin Waring.
</p>
</li>
<li> <p><code>R CMD Sweave --clean</code> no longer removes
pre-existing files or subdirectories (<a href="https://bugs.R-project.org/show_bug.cgi?id=18242">PR#18242</a>).
</p>
</li>
<li><p> The <code>quartz()</code> device no longer splits polylines into
subpaths. That has caused narrowly-spaced lines with many points
to always look solid even when dashed line type was used due to
dash phase restarts.
</p>
</li>
<li><p> Deparsing constructs such as <code>quote(1 + `!`(2) + 3)</code> works
again as before R 3.5.0, thanks to the report and patch in <a href="https://bugs.R-project.org/show_bug.cgi?id=18284">PR#18284</a>
by Suharto Anggono.
</p>
</li>
<li> <p><code>as.list(f)</code> for a <code>factor</code> <code>f</code> now keeps
<code>names(f)</code>, fixing <a href="https://bugs.R-project.org/show_bug.cgi?id=18309">PR#18309</a>.
</p>
</li>
<li> <p><code>qbeta(.001, .9, .009)</code> and analogous <code>qf()</code> calls now
return a correct value instead of <code>NaN</code> or wrongly <code>1</code>, all
with a warning; thanks to the report by Ludger Goeminne in <a href="https://bugs.R-project.org/show_bug.cgi?id=18302">PR#18302</a>.
</p>
</li>
<li> <p><code>plot.lm()</code> failed to produce the plot of residuals vs.
factor levels (i.e., <code>which=5</code> when leverages are constant)
for models with character predictors (<a href="https://bugs.R-project.org/show_bug.cgi?id=17840">PR#17840</a>).
</p>
</li>
<li> <p><code>interaction.plot(..., xtick = TRUE)</code> misplaced the
x-axis line (<a href="https://bugs.R-project.org/show_bug.cgi?id=18305">PR#18305</a>).
</p>
</li>
<li><p> Not strictly fixing a bug, <code>format()</code>ing and
<code>print()</code>ing of non-finite <code>Date</code> and <code>POSIXt</code>
values <code>NaN</code> and <code class="reqn">\pm</code><code>Inf</code> no longer show as
<code>NA</code> but the respective string, e.g., <code>Inf</code>, for
consistency with numeric vector's behaviour, fulfilling the wish
of <a href="https://bugs.R-project.org/show_bug.cgi?id=18308">PR#18308</a>.
</p>
</li>
<li> <p><code>R CMD check</code> no longer runs test scripts generated
from corresponding &lsquo;<span class="file">.Rin</span>&rsquo; files twice and now signals an
ERROR if processing an &lsquo;<span class="file">.Rin</span>&rsquo; script fails.
</p>
</li>
<li> <p><code>tools::Rd2txt()</code> used for plain-text help pages now renders
<code style="white-space: pre;">&#8288;\href&#8288;</code>s (if <code>tools::Rd2txt_options(showURLs = TRUE)</code>)
and <code style="white-space: pre;">&#8288;\url&#8288;</code>s with percent-encoding and standards-compliant
delimiting style (angle brackets and no &lsquo;<span class="samp">&#8288;URL: &#8288;</span>&rsquo; prefix).
<code style="white-space: pre;">&#8288;\email&#8288;</code> is now rendered with a &lsquo;<span class="samp">&#8288;mailto:&#8288;</span>&rsquo; prefix.
</p>
</li></ul>




<h3><img src="../help/figures/../../html/Rlogo.svg" class="toplogo" alt="[R logo]" /> CHANGES IN R 4.1.3</h3>



<h4>NEW FEATURES</h4>


<ul>
<li><p> The default version of Bioconductor has been changed to
3.14. (This is used by <code>setRepositories</code> and the menus in
GUIs.)
</p>
</li></ul>




<h4>UTILITIES</h4>


<ul>
<li> <p><code>R CMD check --as-cran</code> has a workaround for a bug
in versions of <code>file</code> up to at least 5.41 which
mis-identify DBF files last changed in 2022 as executables.
</p>
</li></ul>




<h4>C-LEVEL FACILITIES</h4>


<ul>
<li><p> The legacy S-compatibility macros <code>SINGLE_*</code> in
&lsquo;<span class="file">R_ext/Constants.h</span>&rsquo; (included by &lsquo;<span class="file">R.h</span>&rsquo;) are deprecated
and will be removed in <span class="rlang"><b>R</b></span> 4.2.0.
</p>
</li></ul>




<h4>BUG FIXES</h4>


<ul>
<li><p> Initialization of self-starting <code>nls()</code> models with
initialization functions following the pre-R-4.1.0 API
(without the <code>...</code> argument) works again for now, with a
deprecation warning.
</p>
</li>
<li><p> Fixed quoting of <code>~autodetect~</code> in Java setting defaults
to avoid inadvertent user lookup due to leading <code>~</code>, reported
in <a href="https://bugs.R-project.org/show_bug.cgi?id=18231">PR#18231</a> by Harold Gutch.
</p>
</li>
<li> <p><code>substr(., start, stop) &lt;- v</code> now treats <em>negative</em>
<code>stop</code> values correctly.  Reported with a patch in <a href="https://bugs.R-project.org/show_bug.cgi?id=18228">PR#18228</a> by
Brodie Gaslam.
</p>
</li>
<li><p> Subscripting an array <code>x</code> without dimnames by a
<code>length(dim(x))</code>-column character matrix gave &quot;random&quot;
non-sense, now an error; reported in <a href="https://bugs.R-project.org/show_bug.cgi?id=18244">PR#18244</a> by Mikael Jagan.
</p>
</li>
<li> <p><code>...names()</code> now matches <code>names(list(...))</code> closely,
fixing <a href="https://bugs.R-project.org/show_bug.cgi?id=18247">PR#18247</a>.
</p>
</li>
<li> <p><code>all.equal(*, scale = s)</code> now works as intended when
<code>length(s) &gt; 1</code>, partly thanks to Michael Chirico's <a href="https://bugs.R-project.org/show_bug.cgi?id=18272">PR#18272</a>.
</p>
</li>
<li> <p><code>print(x)</code> for long vectors <code>x</code> now also works for
named atomic vectors or lists and prints the correct number when
reaching the <code>getOption("max.print")</code> limit; partly thanks to a
report and proposal by Hugh Parsonage to the R-devel list.
</p>
</li>
<li> <p><code>all.equal(&lt;selfStart&gt;, *)</code> no longer signals a deprecation
warning.
</p>
</li>
<li> <p><code>reformulate(*, response=r)</code> gives a helpful error message
now when <code>length(r) &gt; 1</code>, thanks to Bill Dunlap's <a href="https://bugs.R-project.org/show_bug.cgi?id=18281">PR#18281</a>.
</p>
</li>
<li><p> Modifying <code>globalCallingHandlers</code> inside
<code>withCallingHandlers()</code> now works or fails correctly, thanks to
Henrik Bengtsson's <a href="https://bugs.R-project.org/show_bug.cgi?id=18257">PR#18257</a>.
</p>
</li>
<li> <p><code>hist(&lt;Date&gt;, breaks = "days")</code> and
<code>hist(&lt;POSIXt&gt;, breaks = "secs")</code>
no longer fail for inputs of length 1.
</p>
</li>
<li> <p><code>qbeta(.001, .9, .009)</code> and similar cases now converge
correctly thanks to Ben Bolker's report in <a href="https://bugs.R-project.org/show_bug.cgi?id=17746">PR#17746</a>.
</p>
</li>
<li> <p><code>window(x, start, end)</code> no longer wrongly signals
&ldquo;'start' cannot be after 'end'&rdquo;, fixing <a href="https://bugs.R-project.org/show_bug.cgi?id=17527">PR#17527</a> and
<a href="https://bugs.R-project.org/show_bug.cgi?id=18291">PR#18291</a>.
</p>
</li>
<li> <p><code>data()</code> now checks that its (rarely used) <code>list</code>
argument is a character vector &ndash; a couple of packages passed other
types and gave incorrect results.
</p>
</li>
<li> <p><code>which()</code> now checks its <code>arr.ind</code> argument is
TRUE rather coercing to logical and taking the first element &ndash;
which gave incorrect results in package code.
</p>
</li>
<li> <p><code>model.weights()</code> and <code>model.offset()</code> more carefully
extract their model components, thanks to Ben Bolker and Tim Taylor's
R-devel post.
</p>
</li>
<li> <p><code>list.files(recursive = TRUE)</code> now shows all broken
symlinks (previously, some of them may have been omitted, <a href="https://bugs.R-project.org/show_bug.cgi?id=18296">PR#18296</a>).
</p>
</li></ul>




<h3><img src="../help/figures/../../html/Rlogo.svg" class="toplogo" alt="[R logo]" /> CHANGES IN R 4.1.2</h3>



<h4>C-LEVEL FACILITIES</h4>


<ul>
<li><p> The workaround in headers &lsquo;<span class="file">R.h</span>&rsquo; and &lsquo;<span class="file">Rmath.h</span>&rsquo;
(<code>using namespace std;</code>) for the Oracle Developer Studio
compiler is no longer needed now C++11 is required so has been
removed.  A couple more usages of <code>log()</code> (which should have
been <code>std::log()</code>) with an <code>int</code> argument are reported on
Solaris.
</p>
</li>
<li><p> The undocumented limit of 4095 bytes on messages from the
S-compatibility macros <code>PROBLEM</code> and <code>MESSAGE</code> is now
documented and longer messages will be silently truncated rather
than potentially causing segfaults.
</p>
</li>
<li><p> If the <code>R_NO_SEGV_HANDLER</code> environment variable is
non-empty, the signal handler for SEGV/ILL/BUS signals (which
offers recovery user interface) is not set. This allows more
reliable debugging of crashes that involve the console.
</p>
</li></ul>




<h4>DEPRECATED AND DEFUNCT</h4>


<ul>
<li><p> The legacy S-compatibility macros <code>PROBLEM</code>,
<code>MESSAGE</code>, <code>ERROR</code>, <code>WARN</code>, <code>WARNING</code>,
<code>RECOVER</code>, ... are deprecated and will be hidden in <span class="rlang"><b>R</b></span>
4.2.0. <span class="rlang"><b>R</b></span>'s native interface of <code>Rf_error</code> and
<code>Rf_warning</code> has long been preferred.
</p>
</li></ul>




<h4>BUG FIXES</h4>


<ul>
<li> <p><code>.mapply(F, dots, .)</code> no longer segfaults when
<code>dots</code> is not a <code>list</code> and uses <code>match.fun(F)</code> as
always documented; reported by Andrew Simmons in <a href="https://bugs.R-project.org/show_bug.cgi?id=18164">PR#18164</a>.
</p>
</li>
<li> <p><code>hist(&lt;Date&gt;, ...)</code> and <code>hist(&lt;POSIXt&gt;, ...)</code>
no longer pass arguments for <code>rect()</code> (such as <code>col</code> and
<code>density</code>) to <code>axis()</code>.  (Thanks to Sebastian Meyer's
<a href="https://bugs.R-project.org/show_bug.cgi?id=18171">PR#18171</a>.)
</p>
</li>
<li> <p><code style="white-space: pre;">&#8288;\Sexpr{ch}&#8288;</code> now preserves <code>Encoding(ch)</code>. (Thanks to
report and patch by Jeroen Ooms in <a href="https://bugs.R-project.org/show_bug.cgi?id=18152">PR#18152</a>.)
</p>
</li>
<li><p> Setting the RNG to <code>"Marsaglia-Multicarry"</code> e.g., by
<code>RNGkind()</code>, now warns in more places, thanks to
André Gillibert's report and patch in <a href="https://bugs.R-project.org/show_bug.cgi?id=18168">PR#18168</a>.
</p>
</li>
<li> <p><code>gray(numeric(), alpha=1/2)</code> no longer segfaults, fixing
<a href="https://bugs.R-project.org/show_bug.cgi?id=18183">PR#18183</a>, reported by Till Krenz.
</p>
</li>
<li><p> Fixed <code>dnbinom(x, size=&lt;very_small&gt;, .., log=TRUE)</code>
regression, reported by Martin Morgan.
</p>
</li>
<li> <p><code>as.Date.POSIXlt(x)</code> now keeps <code>names(x)</code>, thanks to
Davis Vaughan's report and patch in <a href="https://bugs.R-project.org/show_bug.cgi?id=18188">PR#18188</a>.
</p>
</li>
<li> <p><code>model.response()</code> now strips an <code>"AsIs"</code> class typically,
thanks to Duncan Murdoch's report and other discussants in <a href="https://bugs.R-project.org/show_bug.cgi?id=18190">PR#18190</a>.
</p>
</li>
<li> <p><code>try()</code> is considerably faster in case of an error and
long call, as e.g., from some <code>do.call()</code>.  Thanks to
Alexander Kaever's suggestion posted to R-devel.
</p>
</li>
<li> <p><code>qqline(y = &lt;object&gt;)</code> such as <code>y=I(.)</code>, now works,
see also <a href="https://bugs.R-project.org/show_bug.cgi?id=18190">PR#18190</a>.
</p>
</li>
<li><p> Non-integer <code>mgp</code> <code>par()</code> settings are now handled
correctly in <code>axis()</code> and <code>mtext()</code>, thanks to Mikael
Jagan and Duncan Murdoch's report and suggestion in <a href="https://bugs.R-project.org/show_bug.cgi?id=18194">PR#18194</a>.
</p>
</li>
<li> <p><code>formatC(x)</code> returns length zero <code>character()</code> now,
rather than <code>""</code> when <code>x</code> is of length zero, as documented,
thanks to Davis Vaughan's post to R-devel.
</p>
</li>
<li> <p><code>removeSource(fn)</code> now retains (other) <code>attributes(fn)</code>.
</p>
</li></ul>




<h3><img src="../help/figures/../../html/Rlogo.svg" class="toplogo" alt="[R logo]" /> CHANGES IN R 4.1.1</h3>



<h4>NEW FEATURES</h4>


<ul>
<li> <p><code>require(<var>pkg</var>, quietly = TRUE)</code> is quieter and in
particular does not warn if the package is not found.
</p>
</li></ul>




<h4>DEPRECATED AND DEFUNCT</h4>


<ul>
<li><p> Use of &lsquo;<span class="samp">&#8288;ftp://&#8288;</span>&rsquo; URIs should be regarded as
deprecated, with on-going support confined to <code>method =
	"libcurl"</code> and not routinely tested.  (Nowadays no major browser
supports them.)
</p>
</li>
<li><p> The non-default <code>method = "internal"</code> is deprecated for
&lsquo;<span class="samp">&#8288;http://&#8288;</span>&rsquo; and &lsquo;<span class="samp">&#8288;ftp://&#8288;</span>&rsquo; URIs for both
<code>download.file</code> and <code>url</code>.
</p>
</li>
<li><p> On Windows, <code>method = "wininet"</code> is deprecated for
&lsquo;<span class="samp">&#8288;http://&#8288;</span>&rsquo;, &lsquo;<span class="samp">&#8288;https://&#8288;</span>&rsquo; and &lsquo;<span class="samp">&#8288;ftp://&#8288;</span>&rsquo; URIs for both
<code>download.file</code> and <code>url</code>.  (A warning is only given for
&lsquo;<span class="samp">&#8288;ftp://&#8288;</span>&rsquo;.)
</p>
<p>For &lsquo;<span class="samp">&#8288;ftp://&#8288;</span>&rsquo; URIs the default method is now <code>"libcurl"</code>
if available (which it is on <abbr><span class="acronym">CRAN</span></abbr> builds).
</p>
<p><code>method = "wininet"</code> remains the default for &lsquo;<span class="samp">&#8288;http://&#8288;</span>&rsquo;
and &lsquo;<span class="samp">&#8288;https://&#8288;</span>&rsquo; URIs but if <code>libcurl</code> is available, using
<code>method = "libcurl"</code> is preferred.
</p>
</li></ul>




<h4>INSTALLATION</h4>


<ul>
<li> <p><code>make check</code> now works also without a LaTeX
installation.  (Thanks to Sebastian Meyer's <a href="https://bugs.R-project.org/show_bug.cgi?id=18103">PR#18103</a>.)
</p>
</li></ul>




<h4>BUG FIXES</h4>


<ul>
<li> <p><code>make check-devel</code> works again in an <span class="rlang"><b>R</b></span> build
configured with <span class="option">--without-recommended-packages</span>.
</p>
</li>
<li> <p><code>qnbinom(p, size, mu)</code> for large <code>size/mu</code> is correct
now in a range of cases (<a href="https://bugs.R-project.org/show_bug.cgi?id=18095">PR#18095</a>); similarly for the <code>(size,
      prob)</code> parametrization of the negative binomial.  Also <code>qpois()</code>
and <code>qbinom()</code> are better and or faster for extreme cases.  The
underlying C code has been modularized and is common to all four cases
of discrete distributions.
</p>
</li>
<li> <p><code>gap.axis</code> is now part of the <code>axis()</code> arguments which
are passed from <code>bxp()</code>, and hence <code>boxplot()</code>.  (Thanks to
Martin Smith's report and suggestions in <a href="https://bugs.R-project.org/show_bug.cgi?id=18109">PR#18109</a>.)
</p>
</li>
<li> <p><code>.First</code> and <code>.Last</code> can again be set from the site
profile.
</p>
</li>
<li> <p><code>seq.int(from, to, *)</code> and <code>seq.default(..)</code> now work
better in large range cases where <code>from-to</code> is infinite where
the two boundaries are finite.
</p>
</li>
<li> <p><code>all.equal(x,y)</code> now returns <code>TRUE</code> correctly also
when several entries of <code>abs(x)</code> and <code>abs(y)</code> are close to
<code>.Machine$double.xmax</code>, the largest finite <code>numeric</code>.
</p>
</li>
<li> <p><code>model.frame()</code> now clears the object bit when removing the
<code>class</code> attribute of a value via <code>na.action</code> (<a href="https://bugs.R-project.org/show_bug.cgi?id=18100">PR#18100</a>).
</p>
</li>
<li> <p><code>charClass()</code> now works with multi-character
strings on Windows (<a href="https://bugs.R-project.org/show_bug.cgi?id=18104">PR#18104</a>, fixed by Bill Dunlap).
</p>
</li>
<li> <p><code>encodeString()</code> on Solaris now works again in Latin-1
encoding on characters represented differently in UTF-8.  Support for
surrogate pairs on Solaris has been improved.
</p>
</li>
<li> <p><code>file.show()</code> on Windows now works with non-ASCII path
names representable in the current native encoding (<a href="https://bugs.R-project.org/show_bug.cgi?id=18132">PR#18132</a>).
</p>
</li>
<li><p> Embedded <span class="rlang"><b>R</b></span> on Windows can now find <span class="rlang"><b>R</b></span> home directory via the
registry even when installed only for the current user (<a href="https://bugs.R-project.org/show_bug.cgi?id=18135">PR#18135</a>).
</p>
</li>
<li> <p><code>pretty(x)</code> with finite <code>x</code> now returns finite values
also in the case where the extreme <code>x</code> values are close in size
to the maximal representable number <code>.Machine$double.xmax</code>.
</p>
<p>Also, it's been tweaked for very small ranges and when a boundary is
close (or equal) to zero; e.g., <code>pretty(c(0,1e-317))</code> no longer
has negative numbers, currently still warning about a very small
range, and <code>pretty(2^-(1024 - 2^-1/(c(24,10))))</code> is more accurate.
</p>
</li>
<li><p> The error message for not finding vignette files when weaving
has correct file sizes now. (Thanks to Sebastian Meyer's <a href="https://bugs.R-project.org/show_bug.cgi?id=18154">PR#18154</a>.)
</p>
</li>
<li> <p><code>dnbinom(20, &lt;large&gt;, 1)</code> now correctly gives 0, and
similar cases are more accurate with underflow precaution.
(Reported by Francisco Vera Alcivar in <a href="https://bugs.R-project.org/show_bug.cgi?id=18072">PR#18072</a>.)
</p>
</li></ul>




<h3><img src="../help/figures/../../html/Rlogo.svg" class="toplogo" alt="[R logo]" /> CHANGES IN R 4.1.0</h3>



<h4>FUTURE DIRECTIONS</h4>


<ul>
<li><p> It is planned that the 4.1.x series will be the last to
support 32-bit Windows, with production of binary packages for
that series continuing until early 2023.
</p>
</li></ul>




<h4>SIGNIFICANT USER-VISIBLE CHANGES</h4>


<ul>
<li><p> Data set <code>esoph</code> in package <span class="pkg">datasets</span> now provides
the correct numbers of controls; previously it had the numbers of
cases added to these.  (Reported by Alexander Fowler in <a href="https://bugs.R-project.org/show_bug.cgi?id=17964">PR#17964</a>.)
</p>
</li></ul>




<h4>NEW FEATURES</h4>


<ul>
<li> <p>&lsquo;<span class="samp">&#8288;www.omegahat.net&#8288;</span>&rsquo; is no longer one of the repositories
known by default to <code>setRepositories()</code>.  (Nowadays it only
provides source packages and is often unavailable.)

</p>
</li>
<li><p> Function <code>package_dependencies()</code> (in package
<span class="pkg">tools</span>) can now use different dependency types for direct and
recursive dependencies.
</p>
</li>
<li><p> The checking of the size of tarball in
<code>R CMD check --as-cran &lt;pkg&gt;</code> may be tweaked via the new
environment variable
<span class="env">_R_CHECK_CRAN_INCOMING_TARBALL_THRESHOLD_</span>, as suggested in
<a href="https://bugs.R-project.org/show_bug.cgi?id=17777">PR#17777</a> by Jan Gorecki.
</p>
</li>
<li><p> Using <code>c()</code> to combine a factor with other factors now
gives a factor, an ordered factor when combining ordered factors
with identical levels.
</p>
</li>
<li> <p><code>apply()</code> gains a <code>simplify</code> argument to allow
disabling of simplification of results.
</p>
</li>
<li><p> The <code>format()</code> method for class <code>"ftable"</code> gets a
new option <code>justify</code>.  (Suggested by Thomas Soeiro.)
</p>
</li>
<li><p> New <code>...names()</code> utility.  (Proposed by Neal Fultz in
<a href="https://bugs.R-project.org/show_bug.cgi?id=17705">PR#17705</a>.)
</p>
</li>
<li> <p><code>type.convert()</code> now warns when its <code>as.is</code> argument
is not specified, as the help file always said it <em>should</em>.  In
that case, the default is changed to <code>TRUE</code> in line with its
change in <code>read.table()</code> (related to <code>stringsAsFactors</code>) in
<span class="rlang"><b>R</b></span> 4.0.0.
</p>
</li>
<li><p> When printing list arrays, classed objects are now shown
<em>via</em> their <code>format()</code> value if this is a short enough
character string, or by giving the first elements of their class
vector and their length.
</p>
</li>
<li> <p><code>capabilities()</code> gets new entry <code>"Rprof"</code> which is
<code>TRUE</code> when <span class="rlang"><b>R</b></span> has been configured with the equivalent of
<code>--enable-R-profiling</code> (as it is by default).  (Related to
Michael Orlitzky's report <a href="https://bugs.R-project.org/show_bug.cgi?id=17836">PR#17836</a>.)
</p>
</li>
<li> <p><code>str(xS4)</code> now also shows extraneous attributes of an
S4 object <code>xS4</code>.
</p>
</li>
<li><p> Rudimentary support for vi-style tags in <code>rtags()</code> and
<code>R CMD rtags</code> has been added.  (Based on a patch from Neal
Fultz in <a href="https://bugs.R-project.org/show_bug.cgi?id=17214">PR#17214</a>.)
</p>
</li>
<li> <p><code>checkRdContents()</code> is now exported from <span class="pkg">tools</span>; it
and also <code>checkDocFiles()</code> have a new option <code>chkInternal</code>
allowing to check Rd files marked with keyword <code>"internal"</code> as
well.  The latter can be activated for <code>R CMD check</code> via
environment variable <span class="env">_R_CHECK_RD_INTERNAL_TOO_</span>.
</p>
</li>
<li><p> New functions <code>numToBits()</code> and <code>numToInts()</code>
extend the <code>raw</code> conversion utilities to (double precision)
<code>numeric</code>.
</p>
</li>
<li><p> Functions <code>URLencode()</code> and <code>URLdecode()</code> in
package <span class="pkg">utils</span> now work on vectors of URIs.
(Based on patch from Bob Rudis submitted with <a href="https://bugs.R-project.org/show_bug.cgi?id=17873">PR#17873</a>.)
</p>
</li>
<li> <p><code>path.expand()</code> can expand &lsquo;<span class="samp">&#8288;~user&#8288;</span>&rsquo; on most
Unix-alikes even when <code>readline</code> is not in use.  It tries
harder to expand &lsquo;<span class="samp">&#8288;~&#8288;</span>&rsquo;, for example should environment variable
<span class="env">HOME</span> be unset.
</p>
</li>
<li><p> For HTML help (both dynamic and static), Rd file links to
help pages in external packages are now treated as references to
topics rather than file names, and fall back to a file link only
if the topic is not found in the target package. The earlier rule
which prioritized file names over topics can be restored by
setting the environment variable <span class="env">_R_HELP_LINKS_TO_TOPICS_</span> to
a false value.
</p>
</li>
<li> <p><code>c()</code> now removes <code>NULL</code> arguments before
dispatching to methods, thus simplifying the implementation of
<code>c()</code> methods, <em>but</em> for back compatibility keeps
<code>NULL</code> when it is the first argument.  (From a report and
patch proposal by Lionel Henry in <a href="https://bugs.R-project.org/show_bug.cgi?id=17900">PR#17900</a>.)
</p>
</li>
<li> <p><code>Vectorize()</code>'s result function's environment no longer
keeps unneeded objects.
</p>
</li>
<li><p> Function <code>...elt()</code> now propagates visibility
consistently with <code>..n</code>.  (Thanks to Lionel Henry's
<a href="https://bugs.R-project.org/show_bug.cgi?id=17905">PR#17905</a>.)
</p>
</li>
<li> <p><code>capture.output()</code> no longer uses non-standard
evaluation to evaluate its arguments.  This makes evaluation of
functions like <code>parent.frame()</code> more consistent.  (Thanks to
Lionel Henry's <a href="https://bugs.R-project.org/show_bug.cgi?id=17907">PR#17907</a>.)
</p>
</li>
<li> <p><code>packBits(bits, type="double")</code> now works as inverse of
<code>numToBits()</code>.  (Thanks to Bill Dunlap's proposal in
<a href="https://bugs.R-project.org/show_bug.cgi?id=17914">PR#17914</a>.)
</p>
</li>
<li> <p><code>curlGetHeaders()</code> has two new arguments,
<code>timeout</code> to specify the timeout for that call (overriding
<code>getOption("timeout")</code>) and <code>TLS</code> to specify the minimum
TLS protocol version to be used for <code>https://</code> URIs
(<em>inter alia</em> providing a means to check for sites using
deprecated TLS versions 1.0 and 1.1).
</p>
</li>
<li><p> For <code>nls()</code>, an optional constant <code>scaleOffset</code>
may be added to the denominator of the relative offset convergence
test for cases where the fit of a model is expected to be exact,
thanks to a proposal by John Nash.  <code>nls(*, trace=TRUE)</code> now
also shows the convergence criterion.
</p>
</li>
<li><p> Numeric differentiation <em>via</em> <code>numericDeriv()</code>
gets new optional arguments <code>eps</code> and <code>central</code>, the
latter for taking central divided differences.  The latter can be
activated for <code>nls()</code> via <code>nls.control(nDcentral =
      TRUE)</code>.
</p>
</li>
<li> <p><code>nls()</code> now passes the <code>trace</code> and <code>control</code>
arguments to <code>getInitial()</code>, notably for all self-starting models,
so these can also be fit in zero-noise situations via a
<code>scaleOffset</code>.  For this reason, the <code>initial</code> function of a
<code>selfStart</code> model must now have <code>...</code> in its argument list.
</p>
</li>
<li> <p><code>bquote(splice = TRUE)</code> can now splice expression
vectors with attributes: this makes it possible to splice the
result of <code>parse(keep.source = TRUE)</code>.  (Report and patch
provided by Lionel Henry in <a href="https://bugs.R-project.org/show_bug.cgi?id=17869">PR#17869</a>.)
</p>
</li>
<li> <p><code>textConnection()</code> gets an optional <code>name</code> argument.
</p>
</li>
<li> <p><code>get()</code>, <code>exists()</code>, and <code>get0()</code> now signal
an error if the first argument has length greater than 1.
Previously additional elements were silently ignored.  (Suggested
by Antoine Fabri on R-devel.)
</p>
</li>
<li> <p><span class="rlang"><b>R</b></span> now provides a shorthand notation for creating functions,
e.g. <code>\(x) x + 1</code> is parsed as <code>function(x) x + 1</code>.
</p>
</li>
<li> <p><span class="rlang"><b>R</b></span> now provides a simple native forward pipe syntax
<code>|&gt;</code>.  The simple form of the forward pipe inserts the
left-hand side as the first argument in the right-hand side call.
The pipe implementation as a syntax transformation was motivated
by suggestions from Jim Hester and Lionel Henry.
</p>
</li>
<li> <p><code>all.equal(f, g)</code> for <code>function</code>s now by default also
compares their <code>environment(.)</code>s, notably via new
<code>all.equal</code> method for class <code>function</code>.  Comparison of
<code>nls()</code> fits, e.g., may now need <code>all.equal(m1, m2,
	check.environment = FALSE)</code>.
</p>
</li>
<li> <p><code>.libPaths()</code> gets a new option <code>include.site</code>,
allowing to <em>not</em> include the site library.  (Thanks to Dario
Strbenac's suggestion and Gabe Becker's <a href="https://bugs.R-project.org/show_bug.cgi?id=18016">PR#18016</a>.)
</p>
</li>
<li><p> Lithuanian translations are now available.  (Thanks to
Rimantas Žakauskas.)
</p>
</li>
<li> <p><code>names()</code> now works for <code>DOTSXP</code> objects.  On the
other hand, in &lsquo;<span class="file">R-lang</span>&rsquo;, the R language manual, we now warn
against relying on the structure or even existence of such
dot-dot-dot objects.
</p>
</li>
<li> <p><code>all.equal()</code> no longer gives an error on <code>DOTSXP</code>
objects.
</p>

</li>
<li> <p><code>capabilities("cairo")</code> now applies only to the
file-based devices as it is now possible (if very unusual) to
build <span class="rlang"><b>R</b></span> with Cairo support for those but not for <code>X11()</code>.
</p>
</li>
<li><p> There is optional support for tracing the progress of
<code>loadNamespace()</code> &mdash; see its help.
</p>
</li>
<li><p> (Not Windows.)
<code>l10n_info()</code> reports an additional element, the name of the
encoding as reported by the OS (which may differ from the
encoding part (if any) of the result from
<code>Sys.getlocale("LC_CTYPE")</code>).
</p>
</li>
<li><p> New function <code>gregexec()</code> which generalizes <code>regexec()</code>
to find <em>all</em> disjoint matches and all substrings
corresponding to parenthesized subexpressions of the given regular
expression.  (Contributed by Brodie Gaslam.)
</p>
</li>
<li><p> New function <code>charClass()</code> in package <span class="pkg">utils</span> to
query the wide-character classification functions in use (such as
<code>iswprint</code>).
</p>
</li>
<li><p> The names of <code>quantile()</code>'s result no longer depend on the
global <code>getOption("digits")</code>, but <code>quantile()</code> gets a new
optional argument <code>digits = 7</code> instead.
</p>
</li>
<li> <p><code>grep()</code>, <code>sub()</code>, <code>regexp</code> and variants work
considerably faster for long factors with few levels.  (Thanks to
Michael Chirico's <a href="https://bugs.R-project.org/show_bug.cgi?id=18063">PR#18063</a>.)
</p>
</li>
<li><p> Provide grouping of <code>x11()</code> graphics windows within
a window manager such as <code>Gnome</code> or <code>Unity</code>; thanks to a
patch by Ivan Krylov posted to R-devel.
</p>
</li>
<li><p> The <code>split()</code> method for class <code>data.frame</code> now
allows the <code>f</code> argument to be specified as a formula.
</p>
</li>
<li> <p><code>sprintf</code> now warns on arguments unused by the format
string.
</p>
</li>
<li><p> New palettes <code>"Rocket"</code> and <code>"Mako"</code> for
<code>hcl.colors()</code> (approximating palettes of the same name
from the <span class="pkg">viridisLite</span> package).
</p>
<p>Contributed by Achim Zeileis.
</p>
</li>
<li><p> The base environment and its namespace are now locked (so
one can no longer add bindings to these or remove from these).
</p>
</li>
<li> <p><code>Rterm</code> handling of multi-byte characters has been
improved, allowing use of such characters when supported by the
current locale.
</p>
</li>
<li> <p><code>Rterm</code> now accepts <code>ALT+ +xxxxxxxx</code> sequences to
enter Unicode characters as hex digits.
</p>
</li>
<li><p> Environment variable <span class="env">LC_ALL</span> on Windows now takes
precedence over <span class="env">LC_CTYPE</span> and variables for other supported
categories, matching the POSIX behaviour.
</p>
</li>
<li> <p><code>duplicated()</code> and <code>anyDuplicated()</code> are now
optimized for integer and real vectors that are known to be sorted
via the ALTREP framework. Contributed by Gabriel Becker via <a href="https://bugs.R-project.org/show_bug.cgi?id=17993">PR#17993</a>.
</p>
</li></ul>




<h4>GRAPHICS</h4>


<ul>
<li><p> The graphics engine version, <code>R_GE_version</code>, has been
bumped to <code>14</code> and so packages that provide graphics devices
should be reinstalled.
</p>
</li>
<li><p> Graphics devices should now specify <code>deviceVersion</code> to
indicate what version of the graphics engine they support.
</p>
</li>
<li><p> Graphics devices can now specify <code>deviceClip</code>.  If
<code>TRUE</code>, the graphics engine will never perform any clipping
of output itself.
</p>
<p>The clipping that the graphics engine does perform (for both
<code>canClip = TRUE</code> and <code>canClip = FALSE</code>) has been
improved to avoid producing unnecessary artifacts in clipped
output.
</p>
</li>
<li><p> The <span class="pkg">grid</span> package now allows <code>gpar(fill)</code> to be
a <code>linearGradient()</code>, a <code>radialGradient()</code>, or a
<code>pattern()</code>.  The <code>viewport(clip)</code> can now also be
a grob, which defines a clipping path, and there is a new
<code>viewport(mask)</code> that can also be a grob, which defines
a mask.
</p>
<p>These new features are only supported so far on the Cairo-based
graphics devices and on the <code>pdf()</code> device.
</p>
</li>
<li><p> (Not Windows.)
A warning is given when a Cairo-based type is specified for a
<code>png()</code>, <code>jpeg()</code>, <code>tiff()</code> or <code>bmp()</code>
device but Cairo is unsupported (so <code>type = "Xlib"</code>
is tried instead).
</p>
</li>
<li> <p><code>grSoftVersion()</code> now reports the versions of FreeType
and FontConfig if they are used directly (not <em>via</em> Pango),
as is most commonly done on macOS.
</p>
</li></ul>




<h4>C-LEVEL FACILITIES</h4>


<ul>
<li><p> The <em>standalone</em> &lsquo;<span class="file">libRmath</span>&rsquo; math library and <span class="rlang"><b>R</b></span>'s C
API now provide <code>log1pexp()</code> again as documented, and gain
<code>log1mexp()</code>.
</p>
</li></ul>




<h4>INSTALLATION on a UNIX-ALIKE</h4>


<ul>
<li> <p><code>configure</code> checks for a program <code>pkgconf</code>
if program <code>pkg-config</code> is not found.  These are now only
looked for on the path (like almost all other programs) so if needed
specify a full path to the command in <code>PKG_CONFIG</code>, for example
in file &lsquo;<span class="file">config.site</span>&rsquo;.
</p>
</li>
<li><p> C99 function <code>iswblank</code> is required &ndash; it was last seen
missing ca 2003 so the workaround has been removed.
</p>
</li>
<li><p> There are new <code>configure</code> options
<span class="option">--with-internal-iswxxxxx</span>,
<span class="option">--with-internal-towlower</span> and
<span class="option">--with-internal-wcwidth</span> which allows the system functions
for wide-character classification, case-switching and width
(<code>wcwidth</code> and <code>wcswidth</code>) to be replaced by internal
ones.  The first has long been used on macOS, AIX (and Windows)
but this enables it to be unselected there and selected for other
platforms (it is the new default on Solaris).  The second is new
in this version of <span class="rlang"><b>R</b></span> and is selected by default on macOS and
Solaris.  The third has long been the default and remains so as it
contains customizations for East Asian languages.
</p>
<p>System versions of these functions are often minimally implemented
(sometimes only for ASCII characters) and may not cover the full
range of Unicode points: for example Solaris (and Windows) only
cover the Basic Multilingual Plane.
</p>
</li>
<li><p> Cairo installations without X11 are more likely to be
detected by <code>configure</code>, when the file-based Cairo
graphics devices will be available but not <code>X11(type =
      "cairo")</code>.
</p>
</li>
<li><p> There is a new <code>configure</code> option
<span class="option">--with-static-cairo</span> which is the default on macOS.  This
should be used when only static cairo (and where relevant, Pango)
libraries are available.
</p>
</li>
<li><p> Cairo-based graphics devices on platforms without Pango but
with FreeType/FontConfig will make use of the latter for font selection.
</p>
</li></ul>




<h4>LINK-TIME OPTIMIZATION on a UNIX-ALIKE</h4>


<ul>
<li><p> Configuring with flag <span class="option">--enable-lto=R</span> now also uses
LTO when installing the recommended packages.
</p>
</li>
<li> <p><code>R CMD INSTALL</code> and <code>R CMD SHLIB</code> have a new
flag <span class="option">--use-LTO</span> to use LTO when compiling code, for use
with <span class="rlang"><b>R</b></span> configured with <span class="option">--enable-lto=R</span>.  For <span class="rlang"><b>R</b></span>
configured with <span class="option">--enable-lto</span>, they have the new flag
<span class="option">--no-use-LTO</span>.
</p>
<p>Packages can opt in or out of LTO compilation <em>via</em> a
&lsquo;<span class="samp">&#8288;UseLTO&#8288;</span>&rsquo; field in the &lsquo;<span class="file">DESCRIPTION</span>&rsquo; file.  (As usual this
can be overridden by the command-line flags.)
</p>
</li></ul>




<h4>BUILDING R on Windows</h4>


<ul>
<li><p> for GCC <code class="reqn">\ge</code> 8, <code>FC_LEN_T</code> is defined in
&lsquo;<span class="file">config.h</span>&rsquo; and hence character lengths are passed from C to
Fortran in <em>inter alia</em> BLAS and LAPACK calls.
</p>
</li>
<li><p> There is a new text file
&lsquo;<span class="file">src/gnuwin32/README.compilation</span>&rsquo;, which outlines how C/Fortran
code compilation is organized and documents new features:
</p>

<ul>
<li> <p><span class="rlang"><b>R</b></span> can be built with Link-Time Optimization with a
suitable compiler &ndash; doing so with GCC 9.2 showed several
inconsistencies which have been corrected.
</p>
</li>
<li><p> There is support for cross-compiling the C and Fortran
code in <span class="rlang"><b>R</b></span> and standard packages on suitable (Linux) platforms.
This is mainly intended to allow developers to test later
versions of compilers &ndash; for example using GCC 9.2 or 10.x has
detected issues that GCC 8.3 in Rtools40 does not.
</p>
</li>
<li><p> There is experimental support for cross-building <span class="rlang"><b>R</b></span>
packages with C, C++ and/or Fortran code.
</p>
</li></ul>

</li>
<li><p> The R installer can now be optionally built to support a single
architecture (only 64-bit or only 32-bit).
</p>
</li></ul>




<h4>PACKAGE INSTALLATION</h4>


<ul>
<li><p> The default C++ standard has been changed to C++14 where
available (which it is on all currently checked platforms): if not
(as before) C++11 is used if available otherwise C++ is not
supported.
</p>
<p>Packages which specify C++11 will still be installed using C++11.
</p>
<p>C++14 compilers may give deprecation warnings, most often for
<code>std::random_shuffle</code> (deprecated in C++14 and removed in
C++17).  Either specify C++11 (see &lsquo;Writing R Extensions&rsquo;)
or modernize the code and if needed specify C++14.  The latter has
been supported since <span class="rlang"><b>R</b></span> 3.4.0 so the package's &lsquo;<span class="file">DESCRIPTION</span>&rsquo;
would need to include something like
</p>
<pre>
     Depends: R (&gt;= 3.4)
</pre>
</li></ul>




<h4>PACKAGE INSTALLATION on Windows</h4>


<ul>
<li> <p><code>R CMD INSTALL</code> and <code>R CMD SHLIB</code> make use
of their flag <span class="option">--use-LTO</span> when the &lsquo;<span class="samp">&#8288;LTO_OPT&#8288;</span>&rsquo; make
macro is set in file &lsquo;<span class="file">etc/${R_ARCH}/Makeconf</span>&rsquo; or in a
personal/site &lsquo;<span class="file">Makevars</span>&rsquo; file.  (For details see
&lsquo;Writing R Extensions&rsquo; §4.5.)
</p>
<p>This provides a valuable check on code consistency.  It does work
with GCC 8.3 as in Rtools40, but that does not detect everything
the <abbr><span class="acronym">CRAN</span></abbr> checks with current GCC do.
</p>
</li></ul>




<h4>PACKAGE INSTALLATION on macOS</h4>


<ul>
<li><p> The default personal library directory on builds with
<span class="option">--enable-aqua</span> (including <abbr><span class="acronym">CRAN</span></abbr> builds) now
differs by CPU type, one of
</p>
<pre>
      ~/Library/R/x86_64/x.y/library
      ~/Library/R/arm64/x.y/library
</pre>
<p>This uses the CPU type <span class="rlang"><b>R</b></span> (and hence the packages) were built for,
so when a &lsquo;<span class="samp">&#8288;x86_64&#8288;</span>&rsquo; build of R is run under Rosetta emulation on
an &lsquo;<span class="samp">&#8288;arm64&#8288;</span>&rsquo; Mac, the first is used.
</p>
</li></ul>




<h4>UTILITIES</h4>


<ul>
<li> <p><code>R CMD check</code> can now scan package functions for
bogus <code>return</code> statements, which were possibly intended as
<code>return()</code> calls (wish of <a href="https://bugs.R-project.org/show_bug.cgi?id=17180">PR#17180</a>, patch by Sebastian
Meyer). This check can be activated via the new environment
variable <span class="env">_R_CHECK_BOGUS_RETURN_</span>, true for <code>--as-cran</code>.
</p>
</li>
<li> <p><code>R CMD build</code> omits tarballs and binaries of
previous builds from the top-level package directory.
(<a href="https://bugs.R-project.org/show_bug.cgi?id=17828">PR#17828</a>, patch by Sebastian Meyer.)
</p>
</li>
<li> <p><code>R CMD check</code> now runs sanity checks on the use of
&lsquo;<span class="samp">&#8288;LazyData&#8288;</span>&rsquo;, for example that a &lsquo;<span class="file">data</span>&rsquo; directory is
present and that &lsquo;<span class="samp">&#8288;LazyDataCompression&#8288;</span>&rsquo; is not specified
without &lsquo;<span class="samp">&#8288;LazyData&#8288;</span>&rsquo; and has a documented value.  For packages
with large LazyData databases without specifying
&lsquo;<span class="samp">&#8288;LazyDataCompression&#8288;</span>&rsquo;, there is a reference to the code given
in &lsquo;Writing R Extensions&rsquo; §1.1.6 to test the choice of
compression (as in all the <abbr><span class="acronym">CRAN</span></abbr> packages tested a
non-default method was preferred).
</p>
</li>
<li> <p><code>R CMD build</code> removes &lsquo;<span class="samp">&#8288;LazyData&#8288;</span>&rsquo; and
&lsquo;<span class="samp">&#8288;LazyDataCompression&#8288;</span>&rsquo; fields from the &lsquo;<span class="file">DESCRIPTION</span>&rsquo; file
of packages without a &lsquo;<span class="file">data</span>&rsquo; directory.
</p>
</li></ul>




<h4>ENCODING-RELATED CHANGES</h4>


<ul>
<li><p> The parser now treats &lsquo;<span class="samp">&#8288;\Unnnnnnnn&#8288;</span>&rsquo; escapes larger than
the upper limit for Unicode points (&lsquo;<span class="samp">&#8288;\U10FFFF&#8288;</span>&rsquo;) as an error
as they cannot be represented by valid UTF-8.
</p>
<p>Where such escapes are used for outputting non-printable
(including unassigned) characters, 6 hex digits are used (rather
than 8 with leading zeros).  For clarity, braces are used, for
example &lsquo;<span class="samp">&#8288;\U{0effff}&#8288;</span>&rsquo;.
</p>
</li>
<li><p> The parser now looks for non-ASCII spaces on Solaris (as
previously on most other OSes).
</p>
</li>
<li><p> There are warnings (including from the parser) on the use of
unpaired surrogate Unicode points such as &lsquo;<span class="samp">&#8288;\uD834&#8288;</span>&rsquo;.  (These
cannot be converted to valid UTF-8.)
</p>
</li>
<li><p> Functions <code>nchar()</code>, <code>tolower()</code>, <code>toupper()</code>
and <code>chartr()</code> and those using regular expressions have more
support for inputs with a marked Latin-1 encoding.
</p>
</li>
<li><p> The character-classification functions used (by default) to
replace the system <code>iswxxxxx</code> functions on Windows, macOS and
AIX have been updated to Unicode 13.0.0.
</p>
<p>The character-width tables have been updated to include new
assignments in Unicode 13.0.0.  This included treating all control
characters as having zero width.
</p>
</li>
<li><p> The code for evaluating default (extended) regular
expressions now uses the same character-classification functions
as the rest of <span class="rlang"><b>R</b></span> (previously they differed on Windows, macOS and
AIX).
</p>
</li>
<li><p> There is a build-time option to replace the system's
wide-character <code>wctrans</code> C function by tables shipped with
<span class="rlang"><b>R</b></span>: use <code>configure</code> option
<span class="option">--with-internal-towlower</span> or (on Windows)
&lsquo;<span class="samp">&#8288;-DUSE_RI18N_CASE&#8288;</span>&rsquo; in &lsquo;<span class="samp">&#8288;CFLAGS&#8288;</span>&rsquo; when building <span class="rlang"><b>R</b></span>.  This
may be needed to allow <code>tolower()</code> and <code>toupper()</code> to
work with Unicode characters beyond the Basic Multilingual Plane
where not supported by system functions (e.g. on Solaris where it
is the new default).
</p>
</li>
<li><p> R is more careful when truncating UTF-8 and other multi-byte
strings that are too long to be printed, passed to the system or
libraries or placed into an internal buffer.  Truncation will no
longer produce incomplete multibyte characters.
</p>
</li></ul>




<h4>DEPRECATED AND DEFUNCT</h4>


<ul>
<li><p> Function <code>plclust()</code> from the package <span class="pkg">stats</span> and
<code>package.dependencies()</code>, <code>pkgDepends()</code>,
<code>getDepList()</code>, <code>installFoundDepends()</code>, and
<code>vignetteDepends()</code> from package <span class="pkg">tools</span> are defunct.
</p>
</li>
<li><p> Defunct functions <code>checkNEWS()</code> and <code>readNEWS()</code> from
package <span class="pkg">tools</span> and <code>CRAN.packages()</code> from <span class="pkg">utils</span> have
been removed.
</p>
</li>
<li> <p><code>R CMD config CXXCPP</code> is defunct (it was deprecated
in <span class="rlang"><b>R</b></span> 3.6.2).
</p>
</li>
<li> <p><code>parallel::detectCores()</code> drops support for Irix
(retired in 2013).
</p>
</li>
<li><p> The <code>LINPACK</code> argument to <code>chol.default()</code>,
<code>chol2inv()</code>, <code>solve.default()</code> and <code>svd()</code> has
been defunct since <span class="rlang"><b>R</b></span> 3.1.0.  It was silently ignored up to <span class="rlang"><b>R</b></span>
4.0.3 but now gives an error.
</p>
</li>
<li><p> Subsetting/indexing, such as <code>ddd[*]</code> or <code>ddd$x</code>
on a <code>DOTSXP</code> (dot-dot-dot) object <code>ddd</code> has been
disabled; it worked by accident only and was undocumented.
</p>
</li></ul>




<h4>BUG FIXES</h4>


<ul>
<li><p> Many more C-level allocations (mainly by <code>malloc</code> and
<code>strdup</code>) are checked for success with suitable alternative
actions.
</p>
</li>
<li><p> Bug fix for <code>replayPlot()</code>;  this was turning off
graphics engine display list recording if a recorded plot was
replayed in the same session.  The impact of the bug became
visible if resize the device after replay OR if attempted another
<code>savePlot()</code> after replay (empty display list means empty
screen on resize or empty saved plot).
</p>
</li>
<li> <p><code>R CMD check</code> etc now warn when a package exports
non-existing S4 classes or methods, also in case of no
&ldquo;methods&rdquo; presence.  (Reported by Alex Bertram;
reproducible example and patch by Sebastian Meyer in <a href="https://bugs.R-project.org/show_bug.cgi?id=16662">PR#16662</a>.)
</p>
</li>
<li> <p><code>boxplot()</code> now also accepts <code>call</code>s for labels such
as <code>ylab</code>, the same as <code>plot()</code>.  (Reported by Marius Hofert.)
</p>
</li>
<li><p> The help page for <code>xtabs()</code> now correctly states that
<code>addNA</code> is setting <code>na.action = na.pass</code> among others.
(Reported as <a href="https://bugs.R-project.org/show_bug.cgi?id=17770">PR#17770</a> by Thomas Soeiro.)
</p>
</li>
<li><p> The <code>R CMD check &lt;pkg&gt;</code> gives a longer and more
comprehensible message when &lsquo;<span class="file">DESCRIPTION</span>&rsquo; misses dependencies,
e.g., in <code>Imports:</code>.  (Thanks to the contributors of <a href="https://bugs.R-project.org/show_bug.cgi?id=17179">PR#17179</a>.)
</p>
</li>
<li> <p><code>update.default()</code> now calls the generic <code>update()</code>
on the formula to work correctly for models with extended formulas.
(As reported and suggested by Neal Fultz in <a href="https://bugs.R-project.org/show_bug.cgi?id=17865">PR#17865</a>.)
</p>
</li>
<li><p> The horizontal position of leaves in a dendrogram is now
correct also with <code>center = FALSE</code>.  (<a href="https://bugs.R-project.org/show_bug.cgi?id=14938">PR#14938</a>, patch from
Sebastian Meyer.)
</p>
</li>
<li> <p><code>all.equal.POSIXt()</code> no longer warns about and
subsequently ignores inconsistent <code>"tzone"</code> attributes, but
describes the difference in its return value (<a href="https://bugs.R-project.org/show_bug.cgi?id=17277">PR#17277</a>).
This check can be disabled <em>via</em> the new argument
<code>check.tzone = FALSE</code> as suggested by Sebastian Meyer.
</p>
</li>
<li> <p><code>as.POSIXct()</code> now populates the <code>"tzone"</code>
attribute from its <code>tz</code> argument when <code>x</code> is a logical
vector consisting entirely of <code>NA</code> values.
</p>
</li>
<li> <p><code>x[[2^31]] &lt;- v</code> now works.  (Thanks to the report and
patch by Suharto Anggono in <a href="https://bugs.R-project.org/show_bug.cgi?id=17330">PR#17330</a>.)
</p>
</li>
<li><p> In log-scale graphics, <code>axis()</code> ticks and label positions
are now computed more carefully and symmetrically in their range,
typically providing <em>more</em> ticks, fulfilling wishes
in <a href="https://bugs.R-project.org/show_bug.cgi?id=17936">PR#17936</a>.  The change really corresponds to an improved
<code>axisTicks()</code> (package <span class="pkg">grDevices</span>), potentially influencing
<span class="pkg">grid</span> and <span class="pkg">lattice</span>, for example.
</p>
</li>
<li> <p><code>qnorm(&lt;very large negative&gt;, log.p=TRUE)</code> is now correct
to at least five digits where it was catastrophically wrong,
previously.
</p>
</li>
<li> <p><code>sum(df)</code> and similar <code>"Summary"</code>- and
<code>"Math"</code>-group member functions now work for data frames
<code>df</code> with <code>logical</code> columns, notably also of zero
rows.  (Reported to R-devel by Martin &ldquo;b706&rdquo;.)
</p>
</li>
<li> <p><code>unsplit()</code> had trouble with tibbles due to unsound use of
<code>rep(NA, len)</code>-indexing, which should use <code>NA_integer_</code>
(Reported to R-devel by Mario Annau.)
</p>
</li>
<li> <p><code>pnorm(x, log.p = TRUE)</code> underflows to <code>-Inf</code> slightly
later.
</p>
</li>
<li> <p><code>show(&lt;hidden S4 generic&gt;)</code> prints better and without
quotes for non-hidden S4 generics.
</p>
</li>
<li> <p><code>read.table()</code> and relatives treated an &quot;NA&quot; column name as
missing when <code>check.names = FALSE</code> <a href="https://bugs.R-project.org/show_bug.cgi?id=18007">PR#18007</a>.
</p>
</li>
<li><p> Parsing strings containing UTF-16 surrogate pairs such as
<code>"\uD834\uDD1E"</code> works better on some (uncommon) platforms.
<code>sprintf("%X", utf8ToInt("\uD834\uDD1E"))</code> should now give
<code>"1D11E"</code> on all platforms.

</p>
</li>
<li> <p><code>identical(x,y)</code> is no longer true for differing
<code>DOTSXP</code> objects, fixing <a href="https://bugs.R-project.org/show_bug.cgi?id=18032">PR#18032</a>.
</p>
</li>
<li> <p><code>str()</code> now works correctly for <code>DOTSXP</code> and related
exotics, even when these are doomed.
</p>
<p>Additionally, it no longer fails for <code>list</code>s with a <code>class</code> and
&ldquo;irregular&rdquo; method definitions such that e.g. <code>lapply(*)</code> will
necessarily fail, as currently for different <a href="https://CRAN.R-project.org/package=igraph"><span class="pkg">igraph</span></a> objects.
</p>
</li>
<li><p> Message translation domains, e.g., for errors and warnings, are
now correctly determined also when e.g., a <span class="pkg">base</span> function is
called from &ldquo;top-level&rdquo; function (i.e., defined in <code>globalenv()</code>),
thanks to a patch from Joris Goosen fixing <a href="https://bugs.R-project.org/show_bug.cgi?id=17998">PR#17998</a>.
</p>
</li>
<li><p> Too long lines in environment files (e.g., &lsquo;<span class="file">Renviron</span>&rsquo;) no
longer crash <span class="rlang"><b>R</b></span>. This limit has been increased to 100,000 bytes.
(<a href="https://bugs.R-project.org/show_bug.cgi?id=18001">PR#18001</a>.)
</p>
</li>
<li><p> There is a further workaround for FreeType giving
incorrect italic font faces with cairo-based graphics devices on
macOS.
</p>
</li>
<li> <p><code>add_datalist(*, force = TRUE)</code> (from package
<span class="pkg">tools</span>) now actually updates an existing &lsquo;<span class="file">data/datalist</span>&rsquo;
file for new content.  (Thanks to a report and patch by Sebastian
Meyer in <a href="https://bugs.R-project.org/show_bug.cgi?id=18048">PR#18048</a>.)
</p>
</li>
<li> <p><code>cut.Date()</code> and <code>cut.POSIXt()</code> could produce an
empty last interval for <code>breaks = "months"</code> or <code>breaks =
      "years"</code>.  (Reported as <a href="https://bugs.R-project.org/show_bug.cgi?id=18053">PR#18053</a> by Christopher Carbone.)
</p>
</li>
<li><p> Detection of the encoding of &lsquo;regular&rsquo; macOS locales
such as &lsquo;<span class="samp">&#8288;en_US&#8288;</span>&rsquo; (which is UTF-8) had been broken by a macOS
change: fortunately these are now rarely used with
&lsquo;<span class="samp">&#8288;en_US.UTF-8&#8288;</span>&rsquo; being preferred.
</p>
</li>
<li> <p><code>sub()</code> and <code>gsub(pattern, repl, x, *)</code> now keep
attributes of <code>x</code> such as <code>names()</code> also when
<code>pattern</code> is <code>NA</code> (<a href="https://bugs.R-project.org/show_bug.cgi?id=18079">PR#18079</a>).
</p>
</li>
<li><p> Time differences (<code>"difftime"</code> objects) get a replacement
and a <code>rep()</code> method to keep <code>"units"</code> consistent.
(Thanks to a report and patch by Nicolas Bennett in <a href="https://bugs.R-project.org/show_bug.cgi?id=18066">PR#18066</a>.)
</p>
</li>
<li><p> The <code style="white-space: pre;">&#8288;\RdOpts&#8288;</code> macro, setting defaults for <code style="white-space: pre;">&#8288;\Sexpr&#8288;</code>
options in an Rd file, had been ineffective since <span class="rlang"><b>R</b></span> 2.12.0: it
now works again.
(Thanks to a report and patch by Sebastian Meyer in <a href="https://bugs.R-project.org/show_bug.cgi?id=18073">PR#18073</a>.)
</p>
</li>
<li> <p><code>mclapply</code> and <code>pvec</code> no longer accidentally terminate
parallel processes started before by <code>mcparallel</code> or related
calls in package <span class="pkg">parallel</span> (<a href="https://bugs.R-project.org/show_bug.cgi?id=18078">PR#18078</a>).
</p>
</li>
<li> <p><code>grep</code> and other functions for evaluating (extended)
regular expressions handle in Unicode also strings not explicitly
flagged UTF-8, but flagged native when running in UTF-8 locale.
</p>
</li>
<li><p> Fixed a crash in <code>fifo</code> implementation on Windows
(<a href="https://bugs.R-project.org/show_bug.cgi?id=18031">PR#18031</a>).
</p>
</li>
<li><p> Binary mode in <code>fifo</code> on Windows is now properly detected
from argument <code>open</code> (<a href="https://bugs.R-project.org/show_bug.cgi?id=15600">PR#15600</a>, <a href="https://bugs.R-project.org/show_bug.cgi?id=18031">PR#18031</a>).
</p>
</li></ul>




<h3><img src="../help/figures/../../html/Rlogo.svg" class="toplogo" alt="[R logo]" /> CHANGES IN R 4.0.5</h3>



<h4>BUG FIXES</h4>


<ul>
<li><p> The change to the internal table in <span class="rlang"><b>R</b></span> 4.0.4 for
<code>iswprint</code> has been reverted: it contained some errors in
printability of &lsquo;East Asian&rsquo; characters.
</p>
</li>
<li><p> For packages using &lsquo;<span class="samp">&#8288;LazyData&#8288;</span>&rsquo;, <code>R CMD build</code>
ignored the <span class="option">--resave-data</span> option and the
&lsquo;<span class="samp">&#8288;BuildResaveData&#8288;</span>&rsquo; field of the &lsquo;<span class="file">DESCRIPTION</span>&rsquo; file (in <span class="rlang"><b>R</b></span>
versions 4.0.0 to 4.0.4).
</p>
</li></ul>




<h3><img src="../help/figures/../../html/Rlogo.svg" class="toplogo" alt="[R logo]" /> CHANGES IN R 4.0.4</h3>



<h4>NEW FEATURES</h4>


<ul>
<li><p> File &lsquo;<span class="file">share/texmf/tex/latex/jss.cls</span>&rsquo; has been updated
to work with LaTeX versions since Oct 2020.
</p>
</li>
<li><p> Unicode character width tables (as used by
<code>nchar(, type = "w")</code>) have been updated to Unicode 12.1
by Brodie Gaslam (<a href="https://bugs.R-project.org/show_bug.cgi?id=17781">PR#17781</a>), including many emoji.
</p>
</li>
<li><p> The internal table for <code>iswprint</code> (used on Windows,
macOS and AIX) has been updated to include many recent Unicode
characters.
</p>
</li></ul>




<h4>INSTALLATION on a UNIX-ALIKE</h4>


<ul>
<li><p> If an external BLAS is specified by <span class="option">--with-blas=foo</span>
or <em>via</em> environment variable <span class="env">BLAS_LIBS</span> is not found,
this is now a configuration error.  The previous behaviour was not
clear from the documentation: it was to continue the search as if
<span class="option">--with-blas=yes</span> was specified.
</p>
</li></ul>




<h4>BUG FIXES</h4>


<ul>
<li> <p><code>all.equal(x,y)</code> now &ldquo;sees&rdquo; the two different
<code>NA</code>s in factors, thanks to Bill Dunlap and others in
<a href="https://bugs.R-project.org/show_bug.cgi?id=17897">PR#17897</a>.
</p>
</li>
<li> <p><code>(~ NULL)[1]</code> and similar formula subsetting now works,
thanks to a report and patch by Henrik Bengtsson in <a href="https://bugs.R-project.org/show_bug.cgi?id=17935">PR#17935</a>.
Additionally, subsetting leaving an empty formula now works too,
thanks to suggestions by Suharto Anggono.
</p>
</li>
<li> <p><code>.traceback(n)</code> keeps source references again, as before
<span class="rlang"><b>R</b></span> 4.0.0, fixing a regression; introduced by the <a href="https://bugs.R-project.org/show_bug.cgi?id=17580">PR#17580</a>, reported
including two patch proposals by Brodie Gaslam.
</p>
</li>
<li> <p><code>unlist(plst, recursive=FALSE)</code> no longer drops content
for pairlists with list components, thanks to the report and patch
by Suharto Anggono in <a href="https://bugs.R-project.org/show_bug.cgi?id=17950">PR#17950</a>.
</p>
</li>
<li> <p><code>iconvlist()</code> now also works on MUSL based (Linux)
systems, from a report and patch suggestion by Wesley Chan in
<a href="https://bugs.R-project.org/show_bug.cgi?id=17970">PR#17970</a>.
</p>
</li>
<li> <p><code>round()</code> and <code>signif()</code> no longer tolerate wrong
argument names, notably in 1-argument calls; reported by Shane
Mueller on R-devel (mailing list); later reported as <a href="https://bugs.R-project.org/show_bug.cgi?id=17976">PR#17976</a>.
</p>
</li>
<li> <p><code>.Machine</code> has <code>longdouble.*</code> elements only if
<code>capabilities("long.double")</code> is true, as documented.
(Previously they were included if the platform had <code>long
	double</code> identical to <code>double</code>, as ARM does.)
</p>
</li>
<li> <p><code>p.adjust(numeric(), n=0)</code> now works, fixing <a href="https://bugs.R-project.org/show_bug.cgi?id=18002">PR#18002</a>.
</p>
</li>
<li> <p><code>identical(x,y)</code> no longer prints &quot;Unknown Type ..&quot; for
<code>typeof(x) == "..."</code> objects.
</p>
</li>
<li><p> Fix (auto-)<code>print()</code>ing of named complex vectors, see
<a href="https://bugs.R-project.org/show_bug.cgi?id=17868">PR#17868</a> and <a href="https://bugs.R-project.org/show_bug.cgi?id=18019">PR#18019</a>.
</p>
</li>
<li> <p><code>all.equal(&lt;language&gt;, &lt;...&gt;)</code> now works, fixing <a href="https://bugs.R-project.org/show_bug.cgi?id=18029">PR#18029</a>.
</p>
</li>
<li> <p><code>as.data.frame.list(L, row.names=NULL)</code> now behaves in line
with <code>data.frame()</code>, disregarding names of components of
<code>L</code>, fixing <a href="https://bugs.R-project.org/show_bug.cgi?id=18034">PR#18034</a>, reported by Kevin Tappe.
</p>
</li>
<li> <p><code>checkRdaFiles(ff)$version</code> is now correct also when
<code>ff</code> contains files of different versions, thanks to a report
and patch from Sebastian Meyer in <a href="https://bugs.R-project.org/show_bug.cgi?id=18041">PR#18041</a>.
</p>
</li>
<li><p> macOS: Quartz device live drawing could fail (no plot is shown)
if the system changes the drawing context after view update (often
the case since macOS Big Sur). System log may show
&quot;CGContextDelegateCreateForContext: invalid context&quot; error.
</p>
</li></ul>




<h3><img src="../help/figures/../../html/Rlogo.svg" class="toplogo" alt="[R logo]" /> CHANGES IN R 4.0.3</h3>



<h4>NEW FEATURES</h4>


<ul>
<li><p> On platforms using <code>configure</code> option
<span class="option">--with-internal-tzcode</span>, additional values
<code>"internal"</code> and (on macOS only) <code>"macOS"</code> are accepted
for the environment variable <span class="env">TZDIR</span>.  (See <code>?TZDIR</code>.)
</p>
<p>On macOS, <code>"macOS"</code> is used by default if the system timezone
database is a newer version than that in the <span class="rlang"><b>R</b></span> installation.
</p>
</li>
<li><p> When <code>install.packages(type = "source")</code> fails to find
a package in a repository it mentions package versions which are
excluded by their <span class="rlang"><b>R</b></span> version requirement and links to hints on
why a package might not be found.
</p>
</li>
<li><p> The default value for <code>options("timeout")</code> can be set
from environment variable <span class="env">R_DEFAULT_INTERNET_TIMEOUT</span>, still
defaulting to 60 (seconds) if that is not set or invalid.
</p>
<p>This may be needed when child <span class="rlang"><b>R</b></span> processes are doing downloads,
for example during the installation of source packages which
download jars or other forms of data.
</p>
</li></ul>




<h4>LINK-TIME OPTIMIZATION on a UNIX-ALIKE</h4>


<ul>
<li><p> There is now support for parallelized Link-Time Optimization
(LTO) with GCC and for &lsquo;thin&rsquo; LTO with
<code>clang</code> <em>via</em> setting the &lsquo;<span class="samp">&#8288;LTO&#8288;</span>&rsquo; macro.
</p>
</li>
<li><p> There is support for setting a different LTO flag for the
Fortran compiler, including to empty when mixing <code>clang</code>
and <code>gfortran</code> (as on macOS).  See file &lsquo;<span class="file">config.site</span>&rsquo;.
</p>
</li>
<li><p> There is a new &lsquo;<span class="samp">&#8288;LTO_LD&#8288;</span>&rsquo; macro to set linker options for
LTO compilation, for example to select an alternative linker or
to parallelize thin LTO.
</p>
</li></ul>




<h4>DEPRECATED AND DEFUNCT</h4>


<ul>
<li><p> The <code>LINPACK</code> argument to <code>chol.default()</code>,
<code>chol2inv()</code>, <code>solve.default()</code> and <code>svd()</code> has been
defunct since <span class="rlang"><b>R</b></span> 3.1.0.  Using it now gives a warning which will
become an error in <span class="rlang"><b>R</b></span> 4.1.0.
</p>
</li></ul>




<h4>BUG FIXES</h4>


<ul>
<li><p> The code mitigating stack overflow with PCRE regexps on very
long strings is enabled for PCRE2 &lt; 10.30 also when JIT is enabled,
since stack overflows have been seen in that case.

</p>
</li>
<li><p> Fix to correctly show the group labels in <code>dotchart()</code>
(which where lost in the <code>ylab</code> improvement for <span class="rlang"><b>R</b></span> 4.0.0).
</p>
</li>
<li> <p><code>addmargins(*, ..)</code> now also works when <code>fn()</code> is a
local function, thanks to bug report and patch <a href="https://bugs.R-project.org/show_bug.cgi?id=17124">PR#17124</a> from Alex
Bertram.
</p>
</li>
<li> <p><code>rank(x)</code> and hence <code>sort(x)</code> now work when <code>x</code>
is an object (as per <code>is.object(x)</code>) of type <code>"raw"</code>
<em>and</em> provides a valid <code>`[`</code> method, e.g., for
<code>gmp::as.bigz(.)</code> numbers.
</p>
</li>
<li> <p><code>chisq.test(*, simulate.p.value=TRUE)</code> and
<code>r2dtable()</code> now work correctly for large table entries (in the
millions).  Reported by Sebastian Meyer and investigated by more
helpers in <a href="https://bugs.R-project.org/show_bug.cgi?id=16184">PR#16184</a>.
</p>
</li>
<li><p> Low-level socket read/write operations have been fixed to
correctly signal communication errors. Previously, such errors could
lead to a segfault due to invalid memory access. Reported
and debugged by Dmitriy Selivanov in <a href="https://bugs.R-project.org/show_bug.cgi?id=17850">PR#17850</a>.
</p>
</li>
<li> <p><code>quantile(x, pr)</code> works more consistently for <code>pr</code>
values slightly outside [0,1], thanks to Suharto Anggono's <a href="https://bugs.R-project.org/show_bug.cgi?id=17891">PR#17891</a>.
</p>
<p>Further, <code>quantile(x, prN, names=FALSE)</code> now works even when
<code>prN</code> contains <code>NA</code>s, thanks to Anggono's <a href="https://bugs.R-project.org/show_bug.cgi?id=17892">PR#17892</a>.
Ditto for ordered factors or <code>Date</code> objects
when <code>type = 1</code> or <code>3</code>, thanks to <a href="https://bugs.R-project.org/show_bug.cgi?id=17899">PR#17899</a>.
</p>
</li>
<li><p> Libcurl-based internet access, including
<code>curlGetHeaders()</code>, was not respecting the <code>"timeout"</code>
option.  If this causes unanticipated timeouts, consider
increasing the default by setting <span class="env">R_DEFAULT_INTERNET_TIMEOUT</span>.
</p>
</li>
<li> <p><code>as.Date(&lt;char&gt;)</code> now also works with an initial
<code>""</code>, thanks to Michael Chirico's <a href="https://bugs.R-project.org/show_bug.cgi?id=17909">PR#17909</a>.
</p>
</li>
<li> <p><code>isS3stdGeneric(f)</code> now detects an S3 generic also when
it is <code>trace()</code>d, thanks to Gabe Becker's <a href="https://bugs.R-project.org/show_bug.cgi?id=17917">PR#17917</a>.
</p>
</li>
<li> <p><code>R_allocLD()</code> has been fixed to return memory aligned for
long double type <a href="https://bugs.R-project.org/show_bug.cgi?id=16534">PR#16534</a>.
</p>
</li>
<li> <p><code>fisher.test()</code> no longer segfaults when called again after
its internal stack has been exceeded <a href="https://bugs.R-project.org/show_bug.cgi?id=17904">PR#17904</a>.
</p>
</li>
<li><p> Accessing a long vector represented by a compact integer
sequence no longer segfaults (reported and debugged by Hugh
Parsonage).
</p>
</li>
<li> <p><code>duplicated()</code> now works also for strings with multiple
encodings inside a single vector <a href="https://bugs.R-project.org/show_bug.cgi?id=17809">PR#17809</a>.
</p>
</li>
<li> <p><code>phyper(11, 15, 0, 12, log.p=TRUE)</code> no longer gives
<code>NaN</code>; reported as <a href="https://bugs.R-project.org/show_bug.cgi?id=17271">PR#17271</a> by Alexey Stukalov.
</p>
</li>
<li><p> Fix incorrect calculation in <code>logLik.nls()</code> <a href="https://bugs.R-project.org/show_bug.cgi?id=16100">PR#16100</a>, patch
from Sebastian Meyer.
</p>
</li>
<li><p> A very old bug could cause a segfault in <code>model.matrix()</code>
when terms involved logical variables.  Part of <a href="https://bugs.R-project.org/show_bug.cgi?id=17879">PR#17879</a>.
</p>
</li>
<li> <p><code>model.frame.default()</code> allowed <code>data = 1</code>, leading to
involuntary variable capture (rest of <a href="https://bugs.R-project.org/show_bug.cgi?id=17879">PR#17879</a>).
</p>
</li>
<li> <p><code>tar()</code> no longer skips non-directory files, thanks to a
patch by Sebastian Meyer, fixing the remaining part of <a href="https://bugs.R-project.org/show_bug.cgi?id=16716">PR#16716</a>.
</p>
</li></ul>




<h3><img src="../help/figures/../../html/Rlogo.svg" class="toplogo" alt="[R logo]" /> CHANGES IN R 4.0.2</h3>



<h4>UTILITIES</h4>


<ul>
<li> <p><code>R CMD check</code> skips vignette re-building (with a
warning) if the &lsquo;<span class="samp">&#8288;VignetteBuilder&#8288;</span>&rsquo; package(s) are not available.
</p>
</li></ul>




<h4>BUG FIXES</h4>


<ul>
<li><p> Paths with non-ASCII characters caused problems for
package loading on Windows <a href="https://bugs.R-project.org/show_bug.cgi?id=17833">PR#17833</a>.
</p>
</li>
<li><p> Using <span class="pkg">tcltk</span> widgets no longer crashes R on
Windows.
</p>
</li>
<li> <p><code>source(*, echo=TRUE)</code> no longer fails in some cases with
empty lines; reported by Bill Dunlap in <a href="https://bugs.R-project.org/show_bug.cgi?id=17769">PR#17769</a>.
</p>
</li>
<li> <p><code>on.exit()</code> now correctly matches named arguments, thanks
to <a href="https://bugs.R-project.org/show_bug.cgi?id=17815">PR#17815</a> (including patch) by Brodie Gaslam.
</p>
</li>
<li> <p><code>regexpr(*, perl=TRUE)</code> no longer returns incorrect
positions into text containing characters outside of the Unicode
Basic Multilingual Plane on Windows.
</p>
</li></ul>




<h3><img src="../help/figures/../../html/Rlogo.svg" class="toplogo" alt="[R logo]" /> CHANGES IN R 4.0.1</h3>



<h4>NEW FEATURES</h4>


<ul>
<li> <p><code>paste()</code> and <code>paste0()</code> gain a new optional
argument <code>recycle0</code>.  When set to true, zero-length
arguments are recycled leading to <code>character(0)</code> after the
<code>sep</code>-concatenation, i.e., to the empty string <code>""</code> if
<code>collapse</code> is a string and to the zero-length value
<code>character(0)</code> when <code>collapse = NULL</code>.
</p>
<p>A package whose code uses this should depend on &lsquo;<span class="samp">&#8288;R (&gt;= 4.0.1)&#8288;</span>&rsquo;.
</p>
</li>
<li><p> The <code>summary(&lt;warnings&gt;)</code> method now maps the counts
correctly to the warning messages.
</p>
</li></ul>




<h4>BUG FIXES</h4>


<ul>
<li> <p><code>aov(frml, ...)</code> now also works where the <code>formula</code>
deparses to more than 500 characters, thanks to a report and patch
proposal by Jan Hauffa.
</p>
</li>
<li><p> Fix a dozen places (code, examples) as <code>Sys.setlocale()</code>
returns the new rather than the previous setting.
</p>
</li>
<li><p> Fix for adding two complex <span class="pkg">grid</span> units via <code>sum()</code>.
Thanks to Gu Zuguang for the report and Thomas Lin Pedersen for
the patch.
</p>
</li>
<li><p> Fix <code>parallel::mclapply(..., mc.preschedule=FALSE)</code>
to handle raw vector results correctly. <a href="https://bugs.R-project.org/show_bug.cgi?id=17779">PR#17779</a>
</p>
</li>
<li><p> Computing the <code>base</code> value, i.e., 2, &ldquo;everywhere&rdquo;,
now uses <code>FLT_RADIX</code>, as the original &lsquo;<span class="file">machar</span>&rsquo; code looped
indefinitely on the ppc64 architecture for the <code>longdouble</code> case.
</p>
</li>
<li><p> In <span class="rlang"><b>R</b></span> 4.0.0, <code>sort.list(x)</code> when <code>is.object(x)</code> was
true, e.g., for <code>x &lt;- I(letters)</code>, was accidentally using
<code>method = "radix"</code>.  Consequently, e.g., <code>merge(&lt;data.frame&gt;)</code>
was much slower than previously; reported in <a href="https://bugs.R-project.org/show_bug.cgi?id=17794">PR#17794</a>.
</p>
</li>
<li> <p><code>plot(y ~ x, ylab = quote(y[i]))</code> now works, as e.g., for
<code>xlab</code>; related to <a href="https://bugs.R-project.org/show_bug.cgi?id=10525">PR#10525</a>.
</p>
</li>
<li> <p><code>parallel::detect.cores(all.tests = TRUE)</code> tries a
matching OS name before the other tests (which were intended only
for unknown OSes).
</p>
</li>
<li><p> Parse data for raw strings is now recorded correctly. Reported
by Gabor Csardi.
</p>
</li></ul>




<h3><img src="../help/figures/../../html/Rlogo.svg" class="toplogo" alt="[R logo]" /> CHANGES IN R 4.0.0</h3>



<h4>SIGNIFICANT USER-VISIBLE CHANGES</h4>


<ul>
<li><p> Packages need to be (re-)installed under this version
(4.0.0) of <span class="rlang"><b>R</b></span>.
</p>
</li>
<li> <p><code>matrix</code> objects now also inherit from class
<code>"array"</code>, so e.g., <code>class(diag(1))</code> is <code>c("matrix",
	"array")</code>.  This invalidates code incorrectly assuming that
<code>class(matrix_obj))</code> has length one.
</p>
<p>S3 methods for class <code>"array"</code> are now dispatched for
<code>matrix</code> objects.
</p>
</li>
<li><p> There is a new syntax for specifying <em>raw</em> character
constants similar to the one used in C++: <code>r"(...)"</code> with
<code>...</code> any character sequence not containing the sequence
&lsquo;<span class="samp">&#8288;)"&#8288;</span>&rsquo;. 
This makes it easier to write strings that contain backslashes or
both single and double quotes.  For more details see <code>?Quotes</code>.
</p>
</li>
<li> <p><span class="rlang"><b>R</b></span> now uses a &lsquo;<span class="samp">&#8288;stringsAsFactors = FALSE&#8288;</span>&rsquo; default, and
hence by default no longer converts strings to factors in calls
to <code>data.frame()</code> and <code>read.table()</code>.
</p>
<p>A large number of packages relied on the previous behaviour and
so have needed/will need updating.
</p>
</li>
<li><p> The <code>plot()</code> S3 generic function is now in package
<span class="pkg">base</span> rather than package <span class="pkg">graphics</span>, as it is
reasonable to have methods that do not use the <span class="pkg">graphics</span>
package.  The generic is currently re-exported from the
<span class="pkg">graphics</span> namespace to allow packages importing it from
there to continue working, but this may change in future.
</p>
<p>Packages which define S4 generics for <code>plot()</code> should be
re-installed and package code using such generics from other
packages needs to ensure that they are imported rather than rely
on their being looked for on the search path (as in a namespace,
the base namespace has precedence over the search path).
</p>
</li></ul>




<h4>REFERENCE COUNTING</h4>


<ul>
<li><p> Reference counting is now used instead of the <code>NAMED</code>
mechanism for determining when objects can be safely mutated in
base C code.  This reduces the need for copying in some cases and
should allow further optimizations in the future.  It should
help make the internal code easier to maintain.
</p>
<p>This change is expected to have almost no impact on packages
using supported coding practices in their C/C++ code.
</p>
</li></ul>




<h4>MIGRATION TO PCRE2</h4>


<ul>
<li><p> This version of <span class="rlang"><b>R</b></span> is built against the PCRE2 library for
Perl-like regular expressions, if available.  (On non-Windows
platforms PCRE1 can optionally be used if PCRE2 is not available
at build time.)  The version of PCRE in use can be obtained
<em>via</em> <code>extSoftVersion()</code>: PCRE1 (formerly known as
&lsquo;PCRE&rsquo;) has versions &lt;= 8, PCRE2 versions &gt;= 10.
</p>
</li>
<li><p> Making PCRE2 available when building <span class="rlang"><b>R</b></span> from source is
strongly recommended (preferably version 10.30 or later) as PCRE1
is no longer developed: version 8.44 is
&lsquo;likely to be the final release&rsquo;.

</p>
</li>
<li><p> PCRE2 reports errors for some regular expressions that were
accepted by PCRE1.  A hyphen now has to be escaped in a character
class to be interpreted as a literal (unless first or last in the
class definition).  &lsquo;<span class="samp">&#8288;\R&#8288;</span>&rsquo;, &lsquo;<span class="samp">&#8288;\B&#8288;</span>&rsquo; and &lsquo;<span class="samp">&#8288;\X&#8288;</span>&rsquo; are no
longer allowed in character classes (PCRE1 treated these as
literals).
</p>
</li>
<li><p> Option <code>PCRE_study</code> is no longer used with PCRE2, and is
reported as <code>FALSE</code> when that is in use.
</p>
</li></ul>




<h4>NEW FEATURES</h4>


<ul>
<li> <p><code>assertError()</code> and <code>assertWarning()</code> (in package
<span class="pkg">tools</span>) can now check for <em>specific</em> error or warning
classes <em>via</em> the new optional second argument <code>classes</code>
(which is not back compatible with previous use of an unnamed second
argument).
</p>
</li>
<li> <p><code>DF2formula()</code>, the utility for the data frame method of
<code>formula()</code>, now works without parsing and explicit evaluation,
starting from Suharto Anggono's suggestion in <a href="https://bugs.R-project.org/show_bug.cgi?id=17555">PR#17555</a>.
</p>
</li>
<li> <p><code>approxfun()</code> and <code>approx()</code> gain a new argument
<code>na.rm</code> defaulting to true.  If set to false, missing
<code>y</code> values now propagate into the interpolated values.
</p>
</li>
<li><p> Long vectors are now supported as the <code>seq</code> argument of
a <code>for()</code> loop.
</p>
</li>
<li> <p><code>str(x)</code> gets a new <code>deparse.lines</code> option with a
default to speed it up when <code>x</code> is a large <code>call</code> object.
</p>
</li>
<li><p> The internal traceback object produced when an error is
signalled (<code>.Traceback</code>), now contains the <code>call</code>s
rather than the <em><code>deparse()</code>d</em> calls, deferring the
deparsing to the user-level functions <code>.traceback()</code> and
<code>traceback()</code>.  This fulfils the wish of <a href="https://bugs.R-project.org/show_bug.cgi?id=17580">PR#17580</a>, reported
including two patch proposals by Brodie Gaslam.
</p>
</li>
<li> <p><code>data.matrix()</code> now converts character columns to
factors and from this to integers.
</p>
</li>
<li> <p><code>package.skeleton()</code> now explicitly lists all exports
in the &lsquo;<span class="file">NAMESPACE</span>&rsquo; file.
</p>
</li>
<li><p> New function <code>.S3method()</code> to register S3 methods in R
scripts.
</p>
</li>
<li> <p><code>file.path()</code> has some support for file paths not in
the session encoding, e.g. with UTF-8 inputs in a
non-UTF-8 locale the output is marked as UTF-8.
</p>
</li>
<li><p> Most functions with file-path inputs will give an explicit
error if a file-path input in a marked encoding cannot be
translated (to the native encoding or in some cases on Windows to
UTF-8), rather than translate to a different file path using
escapes.  Some (such as <code>dir.exists()</code>, <code>file.exists()</code>,
<code>file.access()</code>, <code>file.info()</code>, <code>list.files()</code>,
<code>normalizePath()</code> and <code>path.expand()</code>) treat this like
any other non-existent file, often with a warning.
</p>
</li>
<li><p> There is a new help document accessed by
<code>help("file path encoding")</code> detailing how file paths with
marked encodings are handled.
</p>
</li>
<li><p> New function <code>list2DF()</code> for creating data frames from
lists of variables.
</p>
</li>
<li> <p><code>iconv()</code> has a new option <code>sub = "Unicode"</code> to
translate UTF-8 input invalid in the &lsquo;<span class="samp">&#8288;to&#8288;</span>&rsquo; encoding using
&lsquo;<span class="samp">&#8288;&lt;U+xxxx&gt;&#8288;</span>&rsquo; escapes.
</p>
</li>
<li><p> There is a new function <code>infoRDS()</code> providing information
about the serialization format of a serialized object.
</p>
</li>
<li><p> S3 method lookup now by default skips the elements of the
search path between the global and base environments.
</p>
</li>
<li><p> Added an argument <code>add_datalist(*, small.size = 0)</code> to
allow the creation of a &lsquo;<span class="file">data/datalist</span>&rsquo; file even when the
total size of the data sets is small.
</p>
</li>
<li><p> The backquote function <code>bquote()</code> has a new argument
<code>splice</code> to enable splicing a computed list of values into an
expression, like <code>,@</code> in LISP's backquote.
</p>
</li>
<li><p> The formula interface to <code>t.test()</code> and
<code>wilcox.test()</code> has been extended to handle one-sample and
paired tests.
</p>
</li>
<li><p> The <code>palette()</code> function has a new default set of
colours (which are less saturated and have better accessibility
properties).  There are also some new built-in palettes, which
are listed by the new <code>palette.pals()</code> function.  These
include the old default palette under the name <code>"R3"</code>. Finally,
the new <code>palette.colors()</code> function allows a subset of
colours to be selected from any of the built-in palettes.
</p>
</li>
<li> <p><code>n2mfrow()</code> gains an option <code>asp = 1</code> to specify the
aspect ratio, fulfilling the wish and extending the proposal of
Michael Chirico in <a href="https://bugs.R-project.org/show_bug.cgi?id=17648">PR#17648</a>.
</p>
</li>
<li><p> For <code>head(x, n)</code> and <code>tail()</code> the default and
other S3 methods notably for <em>vector</em> <code>n</code>, e.g. to get a
&ldquo;corner&rdquo; of a matrix, has been extended to <code>array</code>'s
of higher dimension thanks to the patch proposal by Gabe Becker in
<a href="https://bugs.R-project.org/show_bug.cgi?id=17652">PR#17652</a>.  Consequently, optional argument <code>addrownums</code> is
deprecated and replaced by the (more general) argument
<code>keepnums</code>.  An invalid second argument <code>n</code> now leads
to typically more easily readable error messages.
</p>
</li>
<li><p> New function <code>.class2()</code> provides the full character
vector of class names used for S3 method dispatch.
</p>
</li>
<li><p> Printing <code>methods(..)</code> now uses a new <code>format()</code> method.
</p>
</li>
<li> <p><code>sort.list(x)</code> now works for non-atomic objects
<code>x</code> and <code>method = "auto"</code> (the default) or
<code>"radix"</code> in cases <code>order(x)</code> works, typically via a
<code>xtfrm()</code> method.
</p>
</li>
<li><p> Where they are available, <code>writeBin()</code> allows
long vectors.
</p>
</li>
<li><p> New function <code>deparse1()</code> produces one string, wrapping
<code>deparse()</code>, to be used typically in
<code>deparse1(substitute(*))</code>, e.g., to fix <a href="https://bugs.R-project.org/show_bug.cgi?id=17671">PR#17671</a>.
</p>
</li>
<li> <p><code>wilcox.test()</code> enhancements: In the (non-paired)
two-sample case, <code>Inf</code> values are treated as very large for
robustness consistency.  If exact computations are used, the
result now has <code>"exact"</code> in the <code>method</code> element of its
return value.  New arguments <code>tol.root</code> and
<code>digits.rank</code> where the latter may be used for stability to
treat very close numbers as ties.
</p>
</li>
<li> <p><code>readBin()</code> and <code>writeBin()</code> now report an error
for an invalid <code>endian</code> value.  The affected code needs to be
fixed with care as the old undocumented behavior was to swap
endian-ness in such cases.
</p>
</li>
<li> <p><code>sequence()</code> is now an S3 generic with an internally
implemented default method, and gains arguments to generate more
complex sequences.  Based on code from the <span class="pkg">S4Vectors</span>
Bioconductor package and the advice of Hervé Pagès.
</p>
</li>
<li> <p><code>print()</code>'s default method and many other methods (by
calling the default eventually and passing <code>...</code>) now make
use of a new optional <code>width</code> argument, avoiding the need for
the user to set and reset <code>options("width")</code>.
</p>
</li>
<li> <p><code>memDecompress()</code> supports the RFC 1952 format
(e.g. in-memory copies of <code>gzip</code>-compressed files)
as well as RFC 1950.
</p>
</li>
<li> <p><code>memCompress()</code> and <code>memDecompress()</code> support long
raw vectors for types <code>"gzip"</code> and <code>"zx"</code>.
</p>
</li>
<li> <p><code>sweep()</code> and <code>slice.index()</code> can now use names
of dimnames for their <code>MARGIN</code> argument (<code>apply</code> has
had this for almost a decade).
</p>
</li>
<li><p> New function <code>proportions()</code> and
<code>marginSums()</code>. These should replace the unfortunately named
<code>prop.table()</code> and <code>margin.table()</code>. They are drop-in
replacements, but also add named-margin functionality. The old
function names are retained as aliases for back-compatibility.
</p>
</li>
<li><p> Functions <code>rbinom()</code>, <code>rgeom()</code>, <code>rhyper()</code>,
<code>rpois()</code>, <code>rnbinom(),</code> <code>rsignrank()</code> and
<code>rwilcox()</code> which have returned integer since <span class="rlang"><b>R</b></span> 3.0.0 and hence
<code>NA</code> when the numbers would have been outside the integer range,
now return double vectors (without NAs, typically) in these cases.
</p>
</li>
<li> <p><code>matplot(x,y)</code> (and hence <code>matlines()</code> and
<code>matpoints()</code>) now call the corresponding methods of
<code>plot()</code> and <code>lines()</code>, e.g, when <code>x</code> is a
<code>"Date"</code> or <code>"POSIXct"</code> object; prompted by Spencer Graves'
suggestion.
</p>
</li>
<li> <p><code>stopifnot()</code> now allows customizing error messages via
argument names, thanks to a patch proposal by Neal Fultz in <a href="https://bugs.R-project.org/show_bug.cgi?id=17688">PR#17688</a>.
</p>
</li>
<li>  <p><code>unlink()</code> gains a new argument <code>expand</code> to disable
wildcard and tilde expansion.  Elements of <code>x</code> of value
<code>"~"</code> are now ignored.
</p>
</li>
<li> <p><code>mle()</code> in the <code>stats4</code> package has had its
interface extended so that arguments to the negative
log-likelihood function can be one or more vectors, with similar
conventions applying to bounds, start values, and parameter values
to be kept fixed.  This required a minor extension to class
<code>"mle"</code>, so saved objects from earlier versions may need to
be recomputed.
</p>
</li>
<li><p> The default for <code>pdf()</code> is now
<code>useDingbats = FALSE</code>.
</p>
</li>
<li><p> The default fill colour for <code>hist()</code> and
<code>boxplot()</code> is now <code>col = "lightgray"</code>.
</p>
</li>
<li><p> The default order of the levels on the y-axis for
<code>spineplot()</code> and <code>cdplot()</code> has been reversed.
</p>
</li>
<li><p> If the <span class="env">R_ALWAYS_INSTALL_TESTS</span> environment variable is
set to a true value, <code>R CMD INSTALL</code> behaves as if
the <span class="option">--install-tests</span> option is always specified. Thanks to
Reinhold Koch for the suggestion.
</p>
</li>
<li><p> New function <code>R_user_dir()</code> in package <span class="pkg">tools</span>
suggests paths appropriate for storing <span class="rlang"><b>R</b></span>-related user-specific
data, configuration and cache files.
</p>
</li>
<li> <p><code>capabilities()</code> gains a new logical option <code>Xchk</code>
to avoid warnings about X11-related capabilities.
</p>
</li>
<li><p> The internal implementation of <span class="pkg">grid</span> units has changed,
but the only visible effects at user-level should be
</p>

<ul>
<li><p> a slightly different print format for some units
(especially unit arithmetic),
</p>
</li>
<li><p> faster performance (for unit operations) and
</p>
</li>
<li><p> two new functions <code>unitType()</code> and <code>unit.psum()</code>.
</p>
</li></ul>

<p>Based on code contributed by Thomas Lin Pedersen.
</p>
</li>
<li><p> When internal dispatch for <code>rep.int()</code>
and <code>rep_len()</code> fails, there is an attempt to dispatch on the
equivalent call to <code>rep()</code>.
</p>
</li>
<li><p> Object <code>.Machine</code> now contains new <code>longdouble.*</code>
entries (when <span class="rlang"><b>R</b></span> uses long doubles internally).
</p>
</li>
<li> <p><code>news()</code> has been enhanced to cover the news on <span class="rlang"><b>R</b></span> 3.x
and 2.x.
</p>
</li>
<li><p> For consistency, <code>N &lt;- NULL; N[[1]] &lt;- val</code> now turns
<code>N</code> into a <code>list</code> also when <code>val)</code> has length one.
This enables <code>dimnames(r1)[[1]] &lt;- "R1"</code> for a 1-row matrix
<code>r1</code>, fixing <a href="https://bugs.R-project.org/show_bug.cgi?id=17719">PR#17719</a> reported by Serguei Sokol.
</p>
</li>
<li> <p><code>deparse(..)</code>, <code>dump(..)</code>, and <code>dput(x,
	 control = "all")</code> now include control option <code>"digits17"</code>
which typically ensures 1:1 invertibility.  New option
<code>control = "exact"</code> ensures numeric exact invertibility
via <code>"hexNumeric"</code>.
</p>
</li>
<li><p> When loading data sets via <code>read.table()</code>,
<code>data()</code> now uses &lsquo;<span class="samp">&#8288;LC_COLLATE=C&#8288;</span>&rsquo; to ensure
locale-independent results for possible string-to-factor
conversions.
</p>
</li>
<li><p> A server socket connection, a new connection type
representing a listening server socket, is created via
<code>serverSocket()</code> and can accept multiple socket connections
via <code>socketAccept()</code>.
</p>
</li>
<li><p> New function <code>socketTimeout()</code> changes the connection
timeout of a socket connection.
</p>
</li>
<li><p> The time needed to start a homogeneous &lsquo;<span class="samp">&#8288;PSOCK&#8288;</span>&rsquo; cluster on
&lsquo;<span class="samp">&#8288;localhost&#8288;</span>&rsquo; with many nodes has been significantly reduced
(package <span class="pkg">parallel</span>).
</p>
</li>
<li><p> New <code>globalCallingHandlers()</code> function to establish
global condition handlers.  This allows registering default
handlers for specific condition classes. Developed in
collaboration with Lionel Henry.
</p>
</li>
<li><p> New function <code>tryInvokeRestart()</code> to invoke a specified
restart if one is available and return without signaling an error
if no such restart is found.  Contributed by Lionel Henry in
<a href="https://bugs.R-project.org/show_bug.cgi?id=17598">PR#17598</a>.
</p>
</li>
<li> <p><code>str(x)</code> now shows the length of <code>attributes</code> in some
cases for a data frame <code>x</code>.
</p>
</li>
<li> <p><code>Rprof()</code> gains a new argument <code>filter.callframes</code>
to request that intervening call frames due to lazy evaluation or
explicit <code>eval()</code> calls be omitted from the recorded profile
data.  Contributed by Lionel Henry in <a href="https://bugs.R-project.org/show_bug.cgi?id=17595">PR#17595</a>.
</p>
</li>
<li><p> The handling of <code>${FOO-bar}</code> and <code>${FOO:-bar}</code>
in &lsquo;<span class="file">Renviron</span>&rsquo; files now follows POSIX shells (at least on a
Unix-alike), so the first treats empty environment variables as
set and the second does not.  Previously both ignored empty
variables.  There are several uses of the first form in
&lsquo;<span class="file">etc/Renviron</span>&rsquo;.
</p>
</li>
<li><p> New <code>classes</code> argument for <code>suppressWarnings()</code>
and <code>suppressMessages()</code> to selectively suppress only
warnings or messages that inherit from particular classes.
Based on patch from Lionel Henry submitted with <a href="https://bugs.R-project.org/show_bug.cgi?id=17619">PR#17619</a>.
</p>
</li>
<li><p> New function <code>activeBindingFunction()</code> retrieves the
function of an active binding.
</p>
</li>
<li><p> New <code>"cairoFT"</code> and <code>"pango"</code> components in the
output of <code>grSoftVersion()</code>.
</p>
</li>
<li><p> New argument <code>symbolfamily</code> in cairo-based graphics
devices and new function <code>cairoSymbolFont()</code> that can be used
to provide the value for that argument.
</p>
</li></ul>




<h4>Windows</h4>


<ul>
<li> <p><code>Rterm</code> now works also when invoked from MSYS2
terminals.  Line editing is possible when command <code>winpty</code> is
installed.
</p>
</li>
<li> <p><code>normalizePath()</code> now resolves symbolic links and
normalizes case of long names of path elements in case-insensitive
folders (<a href="https://bugs.R-project.org/show_bug.cgi?id=17165">PR#17165</a>).
</p>
</li>
<li> <p><code>md5sum()</code> supports UTF-8 file names with characters
that cannot be translated to the native encoding (<a href="https://bugs.R-project.org/show_bug.cgi?id=17633">PR#17633</a>).
</p>
</li>
<li> <p><code>Rterm</code> gains a new option <span class="option">--workspace</span> to
specify the workspace to be restored.  This allows equals to be
part of the name when opening <em>via</em> Windows file associations
(reported by Christian Asseburg).
</p>
</li>
<li> <p><code>Rterm</code> now accepts <code>ALT+xxx</code> sequences also
with NumLock on.  Tilde can be pasted with an Italian keyboard
(<a href="https://bugs.R-project.org/show_bug.cgi?id=17679">PR#17679</a>).
</p>
</li>
<li> <p><span class="rlang"><b>R</b></span> falls back to copying when junction creation fails during
package checking (patch from Duncan Murdoch).
</p>
</li></ul>




<h4>DEPRECATED AND DEFUNCT</h4>


<ul>
<li><p> Make macro &lsquo;<span class="samp">&#8288;F77_VISIBILITY&#8288;</span>&rsquo; has been removed
and replaced by &lsquo;<span class="samp">&#8288;F_VISIBILITY&#8288;</span>&rsquo;.
</p>
</li>
<li><p> Make macros &lsquo;<span class="samp">&#8288;F77&#8288;</span>&rsquo;, &lsquo;<span class="samp">&#8288;FCPIFCPLAGS&#8288;</span>&rsquo; and
&lsquo;<span class="samp">&#8288;SHLIB_OPENMP_FCFLAGS&#8288;</span>&rsquo; have been removed and replaced by
&lsquo;<span class="samp">&#8288;FC&#8288;</span>&rsquo;, &lsquo;<span class="samp">&#8288;FPICFLAGS&#8288;</span>&rsquo; and &lsquo;<span class="samp">&#8288;SHLIB_OPENMP_FFLAGS&#8288;</span>&rsquo;
respectively.  (Most <code>make</code> programs will set &lsquo;<span class="samp">&#8288;F77&#8288;</span>&rsquo;
to the value of &lsquo;<span class="samp">&#8288;FC&#8288;</span>&rsquo;, which is set for package compilation.
But portable code should not rely on this.)
</p>
</li>
<li><p> The deprecated support for specifying C++98 for package
installation has been removed.
</p>
</li>
<li> <p><code>R CMD config</code> no longer knows about the
unused settings &lsquo;<span class="samp">&#8288;F77&#8288;</span>&rsquo; and &lsquo;<span class="samp">&#8288;FCPIFCPLAGS&#8288;</span>&rsquo;, nor
&lsquo;<span class="samp">&#8288;CXX98&#8288;</span>&rsquo; and similar.
</p>
</li>
<li><p> Either PCRE2 or PCRE1 &gt;= 8.32 (Nov 2012) is required: the
deprecated provision for 8.20&ndash;8.31 has been removed.
</p>
</li>
<li><p> Defunct functions <code>mem.limits()</code>, <code>.readRDS()</code>,
<code>.saveRDS()</code>, <code>.find.package()</code>, and <code>.path.package()</code>
from package <span class="pkg">base</span>
and <code>allGenerics()</code>, <code>getAccess()</code>, <code>getAllMethods()</code>,
<code>getClassName()</code>, <code>getClassPackage()</code>, <code>getExtends()</code>,
<code>getProperties()</code>, <code>getPrototype()</code>,
<code>getSubclasses()</code>, <code>getVirtual()</code>, <code>mlistMetaName()</code>,
<code>removeMethodsObject()</code>, <code>seemsS4Object()</code>,
<code>traceOff()</code>, and <code>traceOn()</code> from <span class="pkg">methods</span> have been
removed.
</p>
</li></ul>




<h4>C-LEVEL FACILITIES</h4>


<ul>
<li> <p><code>installChar</code> is now remapped in &lsquo;<span class="file">Rinternals.h</span>&rsquo; to
<code>installTrChar</code>, of which it has been a wrapper since
<span class="rlang"><b>R</b></span> 3.6.0.  Neither are part of the API, but packages using
<code>installChar</code> can replace it if they depend on &lsquo;<span class="samp">&#8288;R &gt;= 3.6.2&#8288;</span>&rsquo;.
</p>
</li>
<li><p> Header &lsquo;<span class="file">R_ext/Print.h</span>&rsquo; defines &lsquo;<span class="samp">&#8288;R_USE_C99_IN_CXX&#8288;</span>&rsquo;
and hence exposes <code>Rvprintf</code> and <code>REvprintf</code> if used
with a C++11 (or later) compiler.
</p>
</li>
<li><p> There are new Fortran subroutines <code>dblepr1</code>,
<code>realpr1</code> and <code>intpr1</code> to print a scalar variable
(<code>gfortran</code> 10 enforces the distinction between scalars
and length-one arrays).  Also <code>labelpr</code> to print just a label.
</p>
</li>
<li> <p><code>R_withCallingErrorHandler</code> is now available for
establishing a calling handler in C code for conditions inheriting
from class <code>error</code>.
</p>
</li></ul>




<h4>INSTALLATION on a UNIX-ALIKE</h4>


<ul>
<li><p> User-set &lsquo;<span class="samp">&#8288;DEFS&#8288;</span>&rsquo; (e.g., in &lsquo;<span class="file">config.site</span>&rsquo;) is now
used for compiling packages (including base packages).
</p>
</li>
<li><p> There is a new variant option <span class="option">--enable-lto=check</span>
for checking consistency of BLAS/LAPACK/LINPACK calls &mdash; see
&lsquo;Writing R Extensions&rsquo;.
</p>
</li>
<li><p> A C++ compiler default is set only if the C++11 standard is
supported: it no longer falls back to C++98.
</p>
</li>
<li><p> PCRE2 is used if available.  To make use of PCRE1 if PCRE2
is unavailable, configure with option <span class="option">--with-pcre1</span>.
</p>
</li>
<li><p> The minimum required version of <code>libcurl</code> is now 7.28.0
(Oct 2012).
</p>
</li>
<li><p> New make target <code>distcheck</code> checks
</p>

<ul>
<li> <p><span class="rlang"><b>R</b></span> can be rebuilt from the tarball created by
<code>make dist</code>,
</p>
</li>
<li><p> the build from the tarball passes <code>make check-all</code>,
</p>
</li>
<li><p> the build installs and uninstalls,
</p>
</li>
<li><p> the source files are properly cleaned by <code>make distclean</code>.
</p>
</li></ul>

</li></ul>




<h4>UTILITIES</h4>


<ul>
<li> <p><code>R --help</code> now mentions the option <code>--no-echo</code>
(renamed from <code>--slave</code>) and its previously undocumented
short form <code>-s</code>.
</p>
</li>
<li> <p><code>R CMD check</code> now optionally checks
<code>configure</code> and <code>cleanup</code> scripts for
non-Bourne-shell code (&lsquo;bashisms&rsquo;).
</p>
</li>
<li> <p><code>R CMD check --as-cran</code> now runs <code>\donttest</code>
examples (which are run by <code>example()</code>) instead of
instructing the tester to do so.  This can be temporarily
circumvented during development by setting environment variable
<span class="env">_R_CHECK_DONTTEST_EXAMPLES_</span> to a false value.
</p>
</li></ul>




<h4>PACKAGE INSTALLATION</h4>


<ul>
<li><p> There is the beginnings of support for the recently approved
C++20 standard, specified analogously to C++14 and C++17.  There is
currently only limited support for this in compilers, with flags
such as <span class="option">-std=c++20</span> and <span class="option">-std=c++2a</span>.  For the time
being the <code>configure</code> test is of accepting one of these
flags and compiling C++17 code.
</p>
</li></ul>




<h4>BUG FIXES</h4>


<ul>
<li> <p><code>formula(x)</code> with <code>length(x) &gt; 1</code> character vectors,
is deprecated now.  Such use has been rare, and has &lsquo;worked&rsquo;
as expected in some cases only.  In other cases, wrong <code>x</code> have
silently been truncated, not detecting previous errors.
</p>
</li>
<li><p> Long-standing issue where the X11 device could lose events
shortly after startup has been addressed (<a href="https://bugs.R-project.org/show_bug.cgi?id=16702">PR#16702</a>).
</p>
</li>
<li><p> The <code>data.frame</code> method for <code>rbind()</code> no longer
drops <code>&lt;NA&gt;</code> levels from factor columns by default
(<a href="https://bugs.R-project.org/show_bug.cgi?id=17562">PR#17562</a>).
</p>
</li>
<li> <p><code>available.packages()</code> and hence <code>install.packages()</code>
now pass their <code>...</code> argument to <code>download.file()</code>,
fulfilling the wish of <a href="https://bugs.R-project.org/show_bug.cgi?id=17532">PR#17532</a>; subsequently,
<code>available.packages()</code> gets new argument <code>quiet</code>, solving
<a href="https://bugs.R-project.org/show_bug.cgi?id=17573">PR#17573</a>.
</p>
</li>
<li> <p><code>stopifnot()</code> gets new argument <code>exprObject</code> to allow
an <span class="rlang"><b>R</b></span> object of class <code>expression</code> (or other &lsquo;language&rsquo;)
to work more consistently, thanks to suggestions by Suharto Anggono.
</p>
</li>
<li> <p><code>conformMethod()</code> now works correctly in cases containing
a &ldquo;<code>&amp;&amp;</code> logic&rdquo; bug, reported by Henrik Bengtsson.  It now
creates methods with <code>"missing"</code> entries in the signature.
Consequently, <code>rematchDefinition()</code> is amended to use
appropriate <code>.local()</code> calls with named arguments where needed.
</p>
</li>
<li> <p><code>format.default(*, scientific = FALSE)</code> now corresponds to
a practically most extreme <code>options(scipen = n)</code> setting rather
than arbitrary <code>n = 100</code>.
</p>
</li>
<li> <p><code>format(as.symbol("foo"))</code> now works (returning <code>"foo"</code>).
</p>
</li>
<li> <p><code>postscript(.., title = *)</code> now signals an error when
the title string contains a character which would produce corrupt
PostScript, thanks to <a href="https://bugs.R-project.org/show_bug.cgi?id=17607">PR#17607</a> by Daisuko Ogawa.
</p>
</li>
<li><p> Certain <code>Ops</code> (notably comparison such as <code>==</code>) now
also work for 0-length data frames, after reports by Hilmar Berger.
</p>
</li>
<li> <p><code>methods(class = class(glm(..)))</code> now warns more usefully
and only once.
</p>
</li>
<li> <p><code>write.dcf()</code> no longer mangles field names (<a href="https://bugs.R-project.org/show_bug.cgi?id=17589">PR#17589</a>).
</p>
</li>
<li><p> Primitive replacement functions no longer mutate a
referenced first argument when used outside of a complex
assignment context.
</p>
</li>
<li><p>  A better error message for <code>contour(*, levels = Inf)</code>.
</p>
</li>
<li><p> The return value of <code>contourLines()</code> is no longer
<code>invisible()</code>.
</p>
</li>
<li><p> The Fortran code for calculating the <code>coefficients</code>
component in <code>lm.influence()</code> was very inefficient. It has
(for now) been replaced with much faster <span class="rlang"><b>R</b></span> code (<a href="https://bugs.R-project.org/show_bug.cgi?id=17624">PR#17624</a>).
</p>
</li>
<li> <p><code>cm.colors(n)</code> <em>etc</em> no longer append the code for
<code>alpha = 1</code>, <code>"FF"</code>, to all colors.  Hence all eight
<code>*.colors()</code> functions and <code>rainbow()</code> behave
consistently and have the same non-explicit default (<a href="https://bugs.R-project.org/show_bug.cgi?id=17659">PR#17659</a>).
</p>
</li>
<li> <p><code>dnorm</code> had a problematic corner case with <code>sd ==
      -Inf</code> or negative <code>sd</code> which was not flagged as an error in
all cases. Thanks to Stephen D. Weigand for reporting and Wang
Jiefei for analyzing this; similar change has been made in
<code>dlnorm()</code>.
</p>
</li>
<li><p> The optional <code>iter.smooth</code> argument of
<code>plot.lm()</code>, (the <code>plot()</code> method for <code>lm</code> and
<code>glm</code> fits) now defaults to <code>0</code> for all <code>glm</code> fits.
Especially for binary observations with high or low fitted
probabilities, this effectively deleted all observations of 1 or
0.  Also, the type of residuals used in the <code>glm</code> case has
been switched to <code>"pearson"</code> since deviance residuals do not
in general have approximately zero mean.
</p>
</li>
<li><p> In <code>plot.lm</code>, Cook's distance was computed from unweighted
residuals, leading to inconsistencies.  Replaced with usual weighted
version. (<a href="https://bugs.R-project.org/show_bug.cgi?id=16056">PR#16056</a>)
</p>
</li>
<li><p> Time-series <code>ts(*, start, end, frequency)</code> with
fractional <code>frequency</code> are supported more consistently;
thanks to a report from Johann Kleinbub and analysis and patch by
Duncan Murdoch in <a href="https://bugs.R-project.org/show_bug.cgi?id=17669">PR#17669</a>.
</p>
</li>
<li><p> In case of errors <code>mcmapply()</code> now preserves attributes
of returned <code>"try-error"</code> objects and avoids simplification,
overriding <code>SIMPLIFY</code> to <code>FALSE</code>. (<a href="https://bugs.R-project.org/show_bug.cgi?id=17653">PR#17653</a>)
</p>
</li>
<li> <p><code>as.difftime()</code> gets new optional <code>tz = "UTC"</code>
argument which should fix behaviour during
daylight-savings-changeover days, fixing <a href="https://bugs.R-project.org/show_bug.cgi?id=16764">PR#16764</a>, thanks to
proposals and analysis by Johannes Ranke and Kirill Müller.
</p>
</li>
<li> <p><code>round()</code> does a better job of rounding
<em>&ldquo;to nearest&rdquo;</em> by <em>measuring</em> and
<em>&ldquo;to even&rdquo;</em>; thanks to a careful algorithm originally
prompted by the report from Adam Wheeler and then others, in
<a href="https://bugs.R-project.org/show_bug.cgi?id=17668">PR#17668</a>.  <br /> <code>round(x, dig)</code> for <em>negative</em> digits
is much more rational now, notably for large <code class="reqn">|dig|</code>.
</p>
</li>
<li><p> Inheritance information on S4 classes is maintained more
consistently, particularly in the case of class unions (in part
due to <a href="https://bugs.R-project.org/show_bug.cgi?id=17596">PR#17596</a> and a report from Ezra Tucker).
</p>
</li>
<li> <p><code>is()</code> behaves more robustly when its argument
<code>class2</code> is a <code>classRepresentation</code> object.
</p>
</li>
<li><p> The warning message when attempting to export an nonexistent
class is now more readable; thanks to Thierry Onkelinx for
recognizing the problem.
</p>
</li>
<li> <p><code>choose()</code> misbehaved in corner cases where it switched
<code>n - k</code> for <code>k</code> and <code>n</code> was only <em>nearly</em> integer
(report from Erik Scott Wright).
</p>
</li>
<li> <p><code>mle()</code> in the <code>stats4</code> package had problems
combining use of box constraints and fixed starting values (in
particular, confidence intervals were affected).
</p>
</li>
<li><p> Operator <code>?</code> now has lower precedence than <code>=</code> to
work as documented, so <code>=</code> behaves like <code>&lt;-</code> in help
expressions (<a href="https://bugs.R-project.org/show_bug.cgi?id=16710">PR#16710</a>).
</p>
</li>
<li> <p><code>smoothEnds(x)</code> now returns <code>integer</code> type in
<em>both</em> cases when <code>x</code> is <code>integer</code>, thanks to a
report and proposal by Bill Dunlap <a href="https://bugs.R-project.org/show_bug.cgi?id=17693">PR#17693</a>.
</p>
</li>
<li><p> The <span class="pkg">methods</span> package does a better job of tracking
inheritance relationships across packages.
</p>
</li>
<li> <p><code>norm(diag(c(1, NA)), "2")</code> now works.
</p>
</li>
<li> <p><code>subset()</code> had problems with 0-col dataframes (reported
by Bill Dunlap, <a href="https://bugs.R-project.org/show_bug.cgi?id=17721">PR#17721</a>).
</p>
</li>
<li><p> Several cases of integer overflow detected by the
&lsquo;undefined behaviour sanitizer&rsquo; of <code>clang</code> 10 have
been circumvented.  One in <code>rhyper()</code> may change the
generated value for large input values.
</p>
</li>
<li> <p><code>dotchart()</code> now places the y-axis label (<code>ylab</code>)
much better, not overplotting labels, thanks to a report and
suggestion by Alexey Shipunov.
</p>

</li>
<li><p> A rare C-level array overflow in <code>chull()</code> has been
worked around.
</p>
</li>
<li><p> Some invalid specifications of the day-of-the-year
(<em>via</em> <code>%j</code>, e.g. day 366 in 2017) or week
plus day-of-the-week are now detected by <code>strptime()</code>.
They now return <code>NA</code> but give a warning as they may have
given random results or corrupted memory in earlier versions of <span class="rlang"><b>R</b></span>.
</p>
</li>
<li> <p><code>socketConnection(server = FALSE)</code> now respects the
connection timeout also on Linux.
</p>
</li>
<li> <p><code>socketConnection(server = FALSE)</code> no longer leaks a
connection that is available right away without waiting (e.g. on
&lsquo;<span class="samp">&#8288;localhost&#8288;</span>&rsquo;).
</p>
</li>
<li><p> Socket connections are now robust against spurious readability
and spurious availability of an incoming connection.
</p>
</li>
<li> <p><code>blocking = FALSE</code> is now respected also on the server side
of a socket connection, allowing non-blocking read operations.
</p>
</li>
<li> <p><code>anova.glm()</code> and <code>anova.glmlist()</code> computed
incorrect score (Rao) tests in no-intercept cases. (André
Gillibert, <a href="https://bugs.R-project.org/show_bug.cgi?id=17735">PR#17735</a>)
</p>
</li>
<li> <p><code>summaryRprof()</code> now should work correctly for the
<code>Rprof(*, memory.profiling=TRUE)</code> case with small chunk size (and
<code>"tseries"</code> or similar) thanks to a patch proposal by Benjamin
Tyner, in <a href="https://bugs.R-project.org/show_bug.cgi?id=15886">PR#15886</a>.
</p>
</li>
<li> <p><code>xgettext()</code> ignores strings passed to
<code>ngettext()</code>, since the latter is handled by
<code>xngettext()</code>. Thanks to Daniele Medri for the report and all
the recent work he has done on the Italian translations.
</p>
</li>
<li> <p><code>data(package = "P")</code> for <code>P</code> in <span class="pkg">base</span> and
<span class="pkg">stats</span> no longer reports the data sets from package
<span class="pkg">datasets</span> (which it did for back compatibility for 16 years),
fixing <a href="https://bugs.R-project.org/show_bug.cgi?id=17730">PR#17730</a>.
</p>
</li>
<li> <p><code>x[[Inf]]</code> (returning <code>NULL</code>) no longer leads to
undefined behavior, thanks to a report by Kirill Müller in
<a href="https://bugs.R-project.org/show_bug.cgi?id=17756">PR#17756</a>.  Further, <code>x[[-Inf]]</code> and <code>x[[-n]]</code> now give
more helpful error messages.
</p>
</li>
<li> <p><code>Gamma()</code> family sometimes had trouble storing
link name <a href="https://bugs.R-project.org/show_bug.cgi?id=15891">PR#15891</a>
</p>
</li></ul>




<h4>BUG FIXES (Windows)</h4>


<ul>
<li> <p><code>Sys.glob()</code> now supports all characters
from the Unicode Basic Multilingual Plane, no longer corrupting
some (less commonly used) characters (<a href="https://bugs.R-project.org/show_bug.cgi?id=17638">PR#17638</a>).
</p>
</li>
<li> <p><code>Rterm</code> now correctly displays
multi-byte-coded characters representable in the current native
encoding (at least on Windows 10 they were sometimes omitted,
<a href="https://bugs.R-project.org/show_bug.cgi?id=17632">PR#17632</a>).
</p>
</li>
<li> <p><code>scan()</code> issues with UTF-8 data when running in a DBCS
locale have been resolved (<a href="https://bugs.R-project.org/show_bug.cgi?id=16520">PR#16520</a>, <a href="https://bugs.R-project.org/show_bug.cgi?id=16584">PR#16584</a>).
</p>
</li>
<li> <p><code>Rterm</code> now accepts enhanced/arrow keys also with
ConPTY.
</p>
</li>
<li> <p><span class="rlang"><b>R</b></span> can now be started <em>via</em> the launcher icon in a
user documents directory whose path is not representable in the
system encoding.
</p>
</li>
<li> <p><code>socketConnection(server = FALSE)</code> now returns instantly
also on Windows when connection failure is signalled.
</p>
</li>
<li><p> Problems with UTF-16 surrogate pairs have been fixed in
several functions, including <code>tolower()</code> and
<code>toupper()</code> (<a href="https://bugs.R-project.org/show_bug.cgi?id=17645">PR#17645</a>).
</p>
</li></ul>




<h3>CHANGES in previous versions</h3>


<ul>
<li><p> Older news can be found in text format in files
<a href="../NEWS.0">NEWS.0</a>, <a href="../NEWS.1">NEWS.1</a>,
<a href="../NEWS.2">NEWS.2</a> and
<a href="../NEWS.3">NEWS.3</a>
in the &lsquo;<span class="file">doc</span>&rsquo; directory.  News in HTML format for
<span class="rlang"><b>R</b></span>  versions 3.x and from 2.10.0 to 2.15.3 are available at
<a href="NEWS.3.html">NEWS.3.html</a>
and
<a href="NEWS.2.html">NEWS.2.html</a>.
</p>
</li></ul>



</div>
</body></html>
