function getParticipantNames() {
            var participantCount = parseInt(document.getElementById("participantCount").value);
            var participants = [];

            for (var i = 1; i <= participantCount; i++) {
                var name = prompt("Enter the name of participant " + i + ":");
                participants.push(name);
            }

            displayParticipantList(participants);
        }

        function displayParticipantList(participants) {
            participants.sort(); // Sort the participants alphabetically
            var participantListHTML = "<ol>";
            participants.forEach(function(name) {
                participantListHTML += "<li>" + name + "</li>";
            });
            participantListHTML += "</ol>";

            document.getElementById("participantList").innerHTML = participantListHTML;
        }