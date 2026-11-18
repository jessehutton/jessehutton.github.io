source "https://rubygems.org"

# Local preview for nrg.wtf.   Run:  bundle exec jekyll serve
#
# GitHub Pages builds the live site with Jekyll 3.10 + Liquid 4.0.4. We pin the
# same versions here instead of using the "github-pages" gem, because that gem
# currently refuses to install on Ruby 4.x (one of its markdown dependencies,
# commonmarker 0.x, caps Ruby at < 4.0). If you ever move to Ruby 3.x you can
# swap all of this for:   gem "github-pages", group: :jekyll_plugins
gem "jekyll", "~> 3.10.0"
gem "liquid", "~> 4.0.4"
gem "kramdown-parser-gfm"

group :jekyll_plugins do
  gem "jekyll-feed"
end

# Needed by `jekyll serve` (no longer bundled with Ruby 3+)
gem "webrick"

# Former default gems removed from newer Ruby versions that Jekyll 3.x still uses
gem "csv"
gem "base64"
gem "bigdecimal"
gem "logger"
gem "ostruct"

# Windows: timezone data + faster file watching
platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
gem "wdm", "~> 0.2", platforms: [:windows]
