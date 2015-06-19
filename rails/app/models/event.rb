class Event < ActiveRecord::Base
  after_create :set_slug

  protected

  def set_slug
    slug = name.parameterize
    i = 1

    while Event.find_by(slug: slug) do
      slug = "#{name.parameterize}-#{i}"
      i = i + 1
    end

    self.slug = slug
    self.save!
  end
end
