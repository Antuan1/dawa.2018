$(document).ready(function(){
	var socket = io();
	$('#formulario').submit(function(e){
		e.preventDefault();
		var Data = {
			_id: $('#_id').val(),
			firs_name: $('#first_name').val(),
			last_name: $('#last_name').val(),
			timezone: $('#timezone').val(),
			locale: $('#locale').val(),
			profile_pic: $('#profile_pic').val(),
		};
		if(data._id==''){
			$('#_id').focus();
			return alert('Debo ingresar su ID! ');
		}
		if(data.firts_name==''){
			$('#firts_name').focus();
			return alert('Debe ingresa su nombre! ');
		}
		socket.emit('crear',data);
		$('#formulario').trigger('reset');
		return true;

	}); 
});