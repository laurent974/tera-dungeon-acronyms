module.exports = function dungeonAcronym(mod) {
  mod.command.add('dj', {
		'$default': () => {
			mod.command.message('<font color="#FF007F">Liste des accronymes des donjons</font>' )
			mod.command.message('<font color="#BEA9DE">LDH</font> -> <font color="#FFDCDB">Rêve de Rukmia HM</font> ' )
			mod.command.message('<font color="#BEA9DE">VSH</font> -> <font color="#FFDCDB">Sanctuaire effondré HM</font> ' )
			mod.command.message('<font color="#BEA9DE">SSH</font> -> <font color="#FFDCDB">Temple Sanglant de Dkurion HM</font> ' )
			mod.command.message('<font color="#BEA9DE">Plexus / MCH</font> -> <font color="#FFDCDB">Noyau de Manaya (difficile)</font> ' )
			mod.command.message('<font color="#BEA9DE">DS</font> -> <font color="#FFDCDB">Pic de l\'effroi</font> ' )
			mod.command.message('<font color="#BEA9DE">DRCH</font> -> <font color="#FFDCDB">Forteresse de Ténébris (difficile)</font> ' )
			mod.command.message('<font color="#BEA9DE">VHH</font> -> <font color="#FFDCDB">Porte souterraine effondrée de Velika</font> ' )
		}
	})
}