
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
function setLeftServo(val){
  setServo(0, val);
}

function setRightServo(val){
  setServo(1, val);
}

function setServo(index, val) {
  script.log("Set servo " + val);
  local.send("/servo/set", index, val*0.5+0.5);
}

function setNeon(mode, color, param)
{
  setLed(0, mode, color, param);
}

function setFace(mode, color, param)
{
  setLed(1, mode, color, param);
}

function setBaie(mode, color, param)
{
  setLed(2, mode, color, param);
}

function setLed(index, mode, color, param)
{
  local.send("/ledstrip/set", index, mode, parseFloat(color[0]), color[1], color[2], param);

}

function setRelays(one, two, three, four)
{
  retRelay(0, one);
  retRelay(1, two);
  retRelay(2, three);
  retRelay(3, four);
}

function retRelay(index, val)
{
  local.send("/gpio/dout", index, val);

}
