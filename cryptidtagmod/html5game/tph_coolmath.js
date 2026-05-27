function coolmathCallStart()
{
	if (typeof parent.cmgGameEvent === "function"){
		try {
			parent.cmgGameEvent("start");
		} catch (e) {}
	}
console.log("game start event");
}

function coolmathCallLevelStart(level)
{
	if (typeof parent.cmgGameEvent === "function"){
		try {
			parent.cmgGameEvent("start", String(level));
		} catch (e) {}
	}
console.log("level start " + level);
}

function coolmathCallLevelRestart(level)
{
	if (typeof parent.cmgGameEvent === "function"){
		try {
			parent.cmgGameEvent("replay", String(level));
		} catch (e) {}
	}
console.log("level restart " + level);
}

// I'm mostly confused about the code below me. Every Cryptid Tag level is not locked behind some requirement..
var shouldUnlockAll = false;

function unlockAllLevels()
{
	shouldUnlockAll = true;
}

function coolmathShouldUnlockAll()
{
	return shouldUnlockAll;
}