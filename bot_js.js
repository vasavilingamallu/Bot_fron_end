	  contact_number =  "08816251333";
	  address = "Vishnupur, Kovvada Rd, Kovvada, Andhra Pradesh 534202";
	  var reply = "";
	  var Menu_data = {about_college: "Vishnu Institute of Technology, was established in 2008 by Sri Vishnu Educational Society (SVES),"+
				   "a leading educational trust to promote quality education, under the aegis of eminent philanthropist Padma Bhushan Dr. B.V.Raju (Late)."+ 
					"The institute is approved by AICTE and is permanently affiliated to JNTUK, Kakinada. It is also accredited by NBA and NAAC 'A++' with 3.51 CGPA.",
					courses_offered: "1. Computer Science & Engineering."+
									  "2. Electronics & Communication Engineering."+
									  "3. Electrical & Electronics Engineering."+
									  "4. Mechanical Engineering."+
									  "5. Information Technology."+
									  "6. Civil Engineering."+
									  "7. Basic Sciences"+
									  "8. Business Administration",
					fee_structure: address + "\n" + " If you have any queries please contact this number "+ contact_number,
					sports_NCC: "General college fee for B.Tech is 95,000 If you want to know about NRI fee details contact" + contact_number,
					placement_offered: "For 2021 passedout students,major companies like TCS,Capgemni,Amazon,Amdocs,SenecaGlobal,Infosys etc.. ",
					sports_and_NCC: "Our students are encouraged to particpate in different tournments for Cricket,volleyball,BasketBall,Throwball,Badminton etc..We have special sports club to maintain all these.",
					internships_and_projects: "Every year our students are doing interships at different multinational companies",
					research: "we have reserch departemt to spouncer the projects and conferences",
					miscellaneous: "Apart from academic subjects,our college provides various additional courses like Pega,Game Development,Android App Development etc.. for students career development",
					Extracurricular_activities: "We have Different clubs to support students interests like Music,Dance,Photography,Astronomy,Coding etc..",
					Notification:"now we don't have any new notifications",
					
					display_about_college : function(){
						$('.chat-body').append('<p class="chat-reply">About Our College </p><br>');
						$('.chat-body').append('<p class="chat-send">'+Menu_data.about_college+'</a></p><br>');
					},
					display_courses_offered : function(){
						$('.chat-body').append('<p class="chat-reply">About Courses Offered</p><br>');
						$('.chat-body').append('<p class="chat-send">'+Menu_data.courses_offered+'</p><br>');
					},
					display_fee_structure : function(){
						$('.chat-body').append('<p class="chat-reply">About Fee Structure</p><br>');
						$('.chat-body').append('<p class="chat-send">'+Menu_data.fee_structure+'</p><br>');
					},
					display_placements_offered : function(){
						$('.chat-body').append('<p class="chat-reply">About Placements Offered</p><br>');
						$('.chat-body').append('<p class="chat-send">'+Menu_data.placement_offered +'</p><br>');
					},
					display_sports_NCC : function(){
						$('.chat-body').append('<p class="chat-reply">About Sports and NCC</p><br>');
						$('.chat-body').append('<p class="chat-send">'+Menu_data.sports_NCC+'</p><br>');
					},
					display_internships_and_projects : function(){
						$('.chat-body').append('<p class="chat-reply">About Internships&projects</p><br>');
						$('.chat-body').append('<p class="chat-send">'+Menu_data.internships_and_projects+'</p><br>');
					},
					disaplay_miscellaneous : function(){
						$('.chat-body').append('<p class="chat-reply">About Miscellaneous Fee</p><br>');
						$('.chat-body').append('<p class="chat-send">'+Menu_data.miscellaneous +'</p><br>');
					},
					display_Extracurricular_activities : function(){
						$('.chat-body').append('<p class="chat-reply">About Extracurricular Activities</p><br>');
						$('.chat-body').append('<p class="chat-send">'+Menu_data.Extracurricular_activities+'</p><br>');
					},
					display_Notification : function(){
						$('.chat-body').append('<p class="chat-reply">About Notification</p><br>');
						$('.chat-body').append('<p class="chat-send">'+Menu_data.Notification+'</p><br>');
					},
					display_research : function(){
						$('.chat-body').append('<p class="chat-reply">About Reserch</p><br>');
						$('.chat-body').append('<p class="chat-send">'+Menu_data.research+'</p><br>');
					}	
					
	  };
      function show_menu_buttons(){
         return '<button type="button" class="about">About College</button>' +
                  '<button type="button" class="Courses_offered">Courses offered </button>' +
                  '<button type="button" class="placements">Placements</button>' +
                  '<button type="button" class="Fee">Fee structure</button>' +
                  '<button type="button" class="sports">Sports & NCC</button>' +
                  '<button type="button" class="projects">Internships&projects</button>' +
                  '<button type="button" class="research">Reserch Work</button>' +
                  '<button type="button" class="mfee">Miscelleneous</button>' +
                  '<button type="button" class="EActivities">Extracurricuilar Activities</button>' +
                  '<button type="button" class="notification">Notification:</button>' ;
      }
      var greetings = true;
      $(document).ready(function () {
         $('.btn').click(function () {
            reply = read_message();
             $('#msg').val("");
            if (greetings) {
				$('.chat-body').append('<p class="chat-reply">' + reply + '</p><br>');
               $('.chat-body').append('<p class="chat-send">' + greeting_message() + '</p><br>');
               $('.chat-body').append('<p class="chat-send">' + get_time_greet() + " " + reply + '</p><br>');
               $('.chat-body').append('<p class="chat-send"> please enter your choice YES/ NO </p><br>');
               greetings = false;
            }
            if (ignore_case(reply,"YES")) {
               $('.chat-body').append('<p class="chat-send">'+ show_menu_buttons()+'</p>');
            }
            if (ignore_case(reply,"About college")){
				Menu_data.display_about_college();
            }
			else if (ignore_case(reply,"Courses offered")) {
				Menu_data.display_courses_offered();
            }
			else if (ignore_case(reply,"Placements")) {
				Menu_data.display_placements_offered();
            }
			else if (ignore_case(reply,"Fee structure")) {
				Menu_data.display_fee_structure();
            }
			else if (ignore_case(reply,"Sports and NCC")) {
				Menu_data.display_sports_NCC();
            }
			else if (ignore_case(reply,"Internships and projects")) {
				Menu_data.display_internships_and_projects();
            }
			else if (ignore_case(reply,"Reserch Work")) {
				Menu_data.display_research();
            }
			else if (ignore_case(reply,"Miscelleneous")) {
				Menu_data.disaplay_miscellaneous();
            }
			else if (ignore_case(reply,"Extracurricuilar Activities")) {
				Menu_data.display_Extracurricular_activities();
            }
			else if (ignore_case(reply,"Notification")) {
				Menu_data.display_Notification();
            }
            if (ignore_case(reply,'Menu')) {
               $('.chat-body').append('<p class="chat-send">'+ show_menu_buttons()+'</p>');
            }
            $('.about').click(function () {
				Menu_data.display_about_college();
            });
			$('.Courses_offered').click(function() {
				Menu_data.display_courses_offered();
			});
			$('.placements').click(function() {
				Menu_data.display_placements_offered();
			});
			$('.Fee').click(function() {
				Menu_data.display_fee_structure();
			});
			$('.sports').click(function() {
					Menu_data.display_sports_NCC();
			});
			$('.projects').click(function() {
				Menu_data.display_internships_and_projects();
			});
			$('.research').click(function() {
				Menu_data.display_research();
			});
			$('.mfee').click(function() {
			   Menu_data.disaplay_miscellaneous();   
			});
			$('.EActivities').click(function() {
			    Menu_data.display_Extracurricular_activities();  
			});
			$('.notification').click(function() {
				Menu_data.display_Notification();
			});
         });

      });
	  function ignore_case(str,c_str){
		return str.toUpperCase() == c_str.toUpperCase() || str.toLowerCase() == c_str.toLowerCase();
	  }
      function greeting_message() {
         greeting_messages = ["hai welcome to Vishnu Institute of technology Bhimavaram", "A very warm welcome to our college i will help you to give information about out college"]
         index = Math.floor(Math.random() * 2);
         return greeting_messages[index];
      }
      function get_time_greet() {
         var d = new Date();
         var hour = d.getHours();
         var msg;
		 if(hour < 12)
			msg = "Good Morning";
         if (hour > 12 && hour <= 17)
            msg = "Good Afternoon";
         else if (hour > 17 && hour <= 21)
            msg = "Good Evening";
         else
            msg = "hey it's late";
         return msg;
      }
      function read_message() {
         return document.getElementById('msg').value;
      }
      