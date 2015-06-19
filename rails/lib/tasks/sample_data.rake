namespace :db do
  desc "Fill database with sample data"

  task :populate => :environment do

    Rake::Task['db:reset'].invoke

    60.times.each do |event|
      description = "Live acoustic Jazz: Piano, double bass, drums with Arthur Satyan

On Friday 12 June: exceptionally featuring Avo Tutunjian & Arthur Satyan Quartet playing live acoustic at the Hangout!

Arthur Satyan, , the 'Dean of Jazz Musicians' in Lebanon, Professor of Piano at the National Conservatory of Music since 1998, he taught, influenced and inspired almost every young jazz musician in the region. Arthur has performed with many jazz masters such as Larry Coryell, Charles Davis, Ray Vega and Ed Cherry. In 2004 he opens the 1st in the Middle East Jazz Department and sets the beginning of serious jazz scene in Lebanon. He is first to academically introduce, spread the word and keep alive the teachings of great beboppers Charlie Parker, Monk, Barry Harris in the region.
With his band live and completely unplugged at The Hangout Beirut Arthur Satyan arrives like a fresh wind with one foot firmly planted in the Jazz tradition and the other in his original music experiences, intense and high-energy compositions and arrangements to turn the fun up to the maximum.'

Enjoy international Food & drinks while enjoying the music!

No Band charge.

Reserve now!

Tel: 76 831 707"

      Event.create!({
        name: "Live acoustic Jazz with Arthur Satyan at The Hangout Beirut",
        description: description,
        location: "The Hangout Beirut, Gemmayze, Lebanon",
        event_date: Date.today + rand(-20..30).days,
        start_time: Time.zone.parse("10:00"),
        end_time: Time.zone.parse("13:00")
      })
    end

  end
end
