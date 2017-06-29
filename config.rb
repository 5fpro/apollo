###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

###
# Helpers
###

# Methods defined in the helpers block are available in templates
set :protocol, 'https://'
set :host, '5fpro.com'
set :ga_id, 'UA-86881903-2'
set :css_dir, 'stylesheets'
set :js_dir,  'javascripts'

helpers do
  def image_url(source)
    config[:protocol] + config[:host] + image_path(source)
  end

  def inline_svg name
    root = Middleman::Application.root
    file_path = "#{root}/source/images/#{name}.svg"
    return File.read(file_path) if File.exists? (file_path)
    "(not found)"
  end

  def root_url
    config[:protocol] + config[:host] + '/'
  end

  def ga_id
    config[:ga_id]
  end
end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript
end

activate :sprockets
sprockets.append_path File.join "#{root}", "bower_components"

activate :livereload, port: '4567'
