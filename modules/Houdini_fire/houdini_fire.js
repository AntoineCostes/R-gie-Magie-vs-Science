
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

function setUV(value)
{
  retRelay(0, value);
}

function set5V(one, two, three)
{
  retRelay(0, one);
  retRelay(1, two);
  retRelay(2, three);
  retRelay(3, four);
}


function setFire(value)
{
  retRelay(4, value);
}


function setValves(one, two, three, four, five, six, seven)
{
  retRelay(5, one);
  retRelay(6, two);
  retRelay(7, three);
  retRelay(8, four);
  retRelay(9, five);
  retRelay(10, six);
  retRelay(11, seven);
}

function retRelay(index, val)
{
  local.send("/gpio/dout", index, val);

}
