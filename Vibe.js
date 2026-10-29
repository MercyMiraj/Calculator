/**
 * Daily Vibe & Color Generator
 * Perfect for adding a little dynamic flair to a personal README or script!
 */

function getDailyVibe() {
    const vibes = [
        "☕ fueled entirely by coffee and curiosity",
        "🚀 shipping code and breaking (then fixing) production",
        "🎧 deep in the zone with lo-fi beats",
        "🐛 debugging mysterious ghosts in the machine",
        "💡 brainstorming the next big side project",
        "📚 learning something completely new today",
        "✨ refactoring code just for the aesthetic"
    ];

    // Use today's date as a seed so the vibe stays consistent all day
    const today = new Date();
    const dayOfYear = Math.floor(
        (today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
    );
    
    const selectedVibe = vibes[dayOfYear % vibes.length];
    
    return {
        date: today.toISOString().split('T')[0],
        vibe: selectedVibe
    };
}

// Run it
const currentVibe = getDailyVibe();
console.log(`📅 Date: ${currentVibe.date}`);
console.log(`✨ Today's Vibe: ${currentVibe.vibe}`);
