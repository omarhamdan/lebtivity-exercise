class EventsController < ApplicationController
  def index
    render json: Event.all
  end

  def show
    render json: Event.find_by(slug: params[:slug])
  end

  def create
    event = Event.new(filtered_params)

    if event.save
      render json: event
    else
      render json: { errors: event.errors }, status: 422
    end
  end

  private

  def filtered_params
    params.require(:event).permit(
      :name,
      :description,
      :location,
      :event_date,
      :start_time,
      :end_time
    )
  end
end
