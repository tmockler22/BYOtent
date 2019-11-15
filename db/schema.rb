# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_14_220237) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "campsites", force: :cascade do |t|
    t.string "title", null: false
    t.text "description", null: false
    t.string "type", null: false
    t.integer "owner_id", null: false
    t.integer "max_guests", null: false
    t.integer "daily_rate", null: false
    t.string "address", null: false
    t.string "state", null: false
    t.string "zipcode", null: false
    t.string "country", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.boolean "pets_allowed", default: false
    t.boolean "lake_nearby", default: false
    t.boolean "wifi", default: false
    t.boolean "fire_pits", default: false
    t.boolean "showers", default: false
    t.boolean "toilets", default: false
    t.boolean "portable_water", default: false
    t.boolean "RV_hookup", default: false
    t.boolean "RV_sanitation", default: false
    t.boolean "picnic_table", default: false
    t.boolean "trash", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
