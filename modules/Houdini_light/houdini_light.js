
var BOARD_NAME = "Houdini_light";

function init() {
  yo();
}

function update()
{
}

function yo()
{
local.parameters.oscOutputs.oscOutput.local.set(false);
local.send("/yo", 0);
}

// PARAMETERS
function moduleParameterChanged(param)
{
}

// VALUES
function moduleValueChanged(value) {
}

// OSC
function oscEvent(address, args)
{
  script.log("OSC Message received "+address+", "+args.length+" arguments");

  if (address == "/"+BOARD_NAME+"/ping") local.parameters.ping.trigger();

  // if (address == "/"+BOARD_NAME+"/yo") local.parameters.oscOutputs.oscOutput.remoteHost.set(args[0]);

}

// COMMANDS
function setServo(index, val) {
  script.log("Set servo " + val);
  if (index == 2) // all
  {
    local.send("/servo/set", 0, val*0.5+0.5);
    local.send("/servo/set", 1, val*0.5+0.5);
  } else
    local.send("/servo/set", index, val*0.5+0.5);
}

function setLeds(strip, mode, color, param)
{
  if (strip == 3) // all
  {
    setLed(0, mode, color, param);
    setLed(1, mode, color, param);
    setLed(2, mode, color, param);
  } else
    setLed(strip, mode, color, param);
}

function setLed(index, mode, color, param)
{
  script.log("Set led " + index);
  local.send("/ledstrip/set", index, mode, parseFloat(color[0]), color[1], color[2], param);
}

function setRelays(red, yellow, green)
{
  retRelay(0, green);
  retRelay(1, yellow);
  retRelay(2, red);
}

function setBall(value)
{
  retRelay(3, value);
}

function retRelay(index, val)
{
  local.send("/gpio/dout", index, val);
}
