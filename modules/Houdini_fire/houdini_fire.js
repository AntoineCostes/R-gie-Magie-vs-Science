
var BOARD_NAME = "Houdini_fire";

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
function setUV(value)
{
  setRelay(0, value);
}

function set5V(one, two, three)
{
  setRelay(0, one);
  setRelay(1, two);
  setRelay(2, three);
  setRelay(3, four);
}

function setArc(value)
{
  setRelay(4, value);
}

function setPropane(value)
{
  setRelay(5, value);
} 

function setValves(one, two, three, four)
{
  setRelay(6, one);
  setRelay(7, two);
  setRelay(8, three);
  setRelay(9, four);
}

function setValve(index, value)
{
  setRelay(index+5, value);
}

function setPump1(value)
{
  setRelay(10, value);
}

function setPump2(value)
{
  setRelay(11, value);
}

function setRelay(index, val)
{
  local.send("/gpio/dout", index, val);
}
