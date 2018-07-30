'use strict';

describe('MidiStore',function(){
	var midistore;
	var mididata = {0: { note:1, delay:2 },
									1: { note:1, delay:2 },
									2: { note:1, delay:2 },
									3: { note:1, delay:2 }
								}
	//firebase.database().ref().child("midistore").push(mididata)

	var push_double = {push: function(midi_ids){return {key: 'SOME_RANDOM_FB_KEY'}},
                      on: function(value){},
                      set: function(value){},
                      child: function(name){return {set: function(value){listofUsers_mock.push(1)}}}

                    };
  var fb_ref_double = {ref: function(MidiStore){return push_double}};

	beforeEach(function(){
		midistore = new MidiStore(fb_ref_double, "piano", 'lucy', mididata);
	});
  it('has an ID', function(){
    expect(midistore.getKey()).toEqual("SOME_RANDOM_FB_KEY")
  })

  it('stores an instrument', function(){
    expect(midistore.getInstrument()).toEqual("piano")
  })

  it('stores a set of notes', function(){
    expect(midistore.getMididata()).toEqual(mididata)
  })

  it('holds a user', function(){
    expect(midistore.getUser()).toEqual('lucy')
  })

	it('updates midi', function(){
		var addition = { note:1, delay:2 };
		midistore.updateMidi(addition);
		mididata[4] = addition
		var new_mididata = mididata
		expect(midistore.getMididata()).toEqual(new_mididata)
	})
});
