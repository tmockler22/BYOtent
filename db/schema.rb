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

ActiveRecord::Schema.define(version: 2019_11_19_204730) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "bookings", force: :cascade do |t|
    t.integer "campsite_id", null: false
    t.integer "camper_id", null: false
    t.integer "num_campers", null: false
    t.date "arrival_date", null: false
    t.date "depart_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "campsites", force: :cascade do |t|
    t.string "title", null: false
    t.text "description", null: false
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
    t.string "site_type", null: false
    t.string "city", null: false
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

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
