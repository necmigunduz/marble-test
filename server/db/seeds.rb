# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Question.create([
    {
        q_text: "What is the capital city of Nigeria?"
    },
    {
        q_text: "Where do you need to go to see the Pope?"
    },
    {
        q_text: "Who is the first human in space?"
    },
    {
        q_text: "Where is the ancient Babylon city is located?"
    },
    {
        q_text: "Who invented number zero?"
    }
])

Option.create([
    { question_id: 1, option: "a", o_text: "Lagos", o_point: 0 },
    { question_id: 1, option: "b", o_text: "Ajuba", o_point: 10 },
    { question_id: 1, option: "c", o_text: "Massala", o_point: 0 },
    { question_id: 1, option: "d", o_text: "Ankara", o_point: 0 },

    { question_id: 2, option: "a", o_text: "Rome", o_point: 10 },
    { question_id: 2, option: "b", o_text: "Istanbul", o_point: 0 },
    { question_id: 2, option: "c", o_text: "Milano", o_point: 0 },
    { question_id: 2, option: "d", o_text: "Jeruselam", o_point: 0 },
    
    { question_id: 3, option: "a", o_text: "Donald Slayton", o_point: 0 },
    { question_id: 3, option: "b", o_text: "Gordon Cooper Jr.", o_point: 0 },
    { question_id: 3, option: "c", o_text: "Yuri Gagarin", o_point: 10 },
    { question_id: 3, option: "d", o_text: "Nil Armstrong", o_point: 0 },
    
    { question_id: 4, option: "a", o_text: "India", o_point: 0 },
    { question_id: 4, option: "b", o_text: "Indonesia", o_point: 0 },
    { question_id: 4, option: "c", o_text: "Syria", o_point: 10 },
    { question_id: 4, option: "d", o_text: "Iran", o_point: 0 },
    
    { question_id: 5, option: "a", o_text: "Archimed", o_point: 0 },
    { question_id: 5, option: "b", o_text: "Plato", o_point: 0 },
    { question_id: 5, option: "c", o_text: "Aristotle", o_point: 0 },
    { question_id: 5, option: "d", o_text: "Ebu Heysem", o_point: 10 }
])