// Mock data for cricket club previous works
const cricketWorks = [
    {
        id: 1,
        title: "Champions Trophy Final 2024",
        date: "2024-11-15",
        category: "tournament",
        description: "A thrilling final match where we clinched the Champions Trophy with an outstanding performance.",
        detailedDescription: "In an electrifying final match, Elite Cricket Club showcased exceptional skill and determination to secure the Champions Trophy 2024. Our batting lineup delivered a masterclass, posting a formidable total of 312 runs. The bowling attack then defended brilliantly, restricting the opposition to 287 runs. This victory marks our third consecutive championship win and cements our position as one of the premier cricket clubs in the region.",
        thumbnail: "assets/images/trophy-final.jpg",
        stats: {
            runs: 312,
            wickets: 8,
            overs: 50
        }
    },
    {
        id: 2,
        title: "Inter-City Derby Match",
        date: "2024-10-22",
        category: "match",
        description: "An intense derby match against our city rivals, ending in a spectacular victory.",
        detailedDescription: "The highly anticipated Inter-City Derby lived up to its billing as one of the most exciting matches of the season. Playing in front of a packed stadium, our team demonstrated resilience and tactical brilliance. After winning the toss and choosing to bat first, we set a challenging target of 278 runs. Our bowlers then executed a perfect game plan, taking crucial wickets at regular intervals to secure a 45-run victory.",
        thumbnail: "assets/images/derby-match.jpg",
        stats: {
            runs: 278,
            wickets: 10,
            overs: 48
        }
    },
    {
        id: 3,
        title: "Summer League Championship",
        date: "2024-08-30",
        category: "tournament",
        description: "Dominated the summer league with consistent performances throughout the season.",
        detailedDescription: "The Summer League Championship was a testament to our team's consistency and depth. Over the course of 12 matches, we maintained an impressive win rate of 83%, losing only two games. Our players topped multiple statistical categories including highest run-scorer, best bowling figures, and most valuable player. The championship victory was sealed with a commanding 7-wicket win in the final.",
        thumbnail: "assets/images/summer-league.jpg",
        stats: {
            runs: 245,
            wickets: 7,
            overs: 45
        }
    },
    {
        id: 4,
        title: "Charity Exhibition Match",
        date: "2024-07-14",
        category: "event",
        description: "A special charity match raising funds for local youth cricket programs.",
        detailedDescription: "Our club organized a spectacular charity exhibition match featuring current players and club legends. The event was a huge success, attracting over 5,000 spectators and raising significant funds for local youth cricket development programs. The match itself was entertaining, with both teams scoring freely and the crowd being treated to some exceptional strokeplay and athletic fielding.",
        thumbnail: "assets/images/charity-match.jpg",
        stats: {
            runs: 298,
            wickets: 6,
            overs: 50
        }
    },
    {
        id: 5,
        title: "Regional Knockout Cup",
        date: "2024-06-05",
        category: "tournament",
        description: "Fought through tough competition to win the Regional Knockout Cup.",
        detailedDescription: "The Regional Knockout Cup tested our mettle against the best teams in the region. Each match was a knockout, leaving no room for error. Our journey to the title included three nail-biting victories, with the semi-final being decided in the final over. The final itself was a masterclass in pressure cricket, with our experienced players guiding us to a 4-wicket victory with just 2 balls remaining.",
        thumbnail: "assets/images/knockout-cup.jpg",
        stats: {
            runs: 223,
            wickets: 6,
            overs: 49.4
        }
    },
    {
        id: 6,
        title: "Opening Season Gala Match",
        date: "2024-04-12",
        category: "event",
        description: "Kicked off the season with a spectacular gala match and club celebration.",
        detailedDescription: "The Opening Season Gala Match marked the beginning of what would become our most successful season to date. The event featured a practice match between our first team and a select XI, followed by a celebration with club members, sponsors, and supporters. The match showcased our new talent acquisitions and set the tone for the dominant season that followed.",
        thumbnail: "assets/images/season-opener.jpg",
        stats: {
            runs: 267,
            wickets: 9,
            overs: 50
        }
    }
];

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Get category display name
function getCategoryName(category) {
    const categories = {
        'match': 'Match',
        'tournament': 'Tournament',
        'event': 'Event'
    };
    return categories[category] || category;
}
