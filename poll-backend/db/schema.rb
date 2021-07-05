# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_05_142514) do

  create_table "polls", force: :cascade do |t|
    t.integer "users_id"
    t.integer "tasks_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "is_active", default: false
    t.index ["tasks_id"], name: "index_polls_on_tasks_id"
    t.index ["users_id"], name: "index_polls_on_users_id"
  end

  create_table "tasks", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.integer "estimate"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "votes", force: :cascade do |t|
    t.integer "users_id"
    t.integer "polls_id"
    t.integer "estimate"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["polls_id"], name: "index_votes_on_polls_id"
    t.index ["users_id"], name: "index_votes_on_users_id"
  end

  add_foreign_key "polls", "tasks", column: "tasks_id"
  add_foreign_key "polls", "users", column: "users_id"
  add_foreign_key "votes", "polls", column: "polls_id"
  add_foreign_key "votes", "users", column: "users_id"
end
