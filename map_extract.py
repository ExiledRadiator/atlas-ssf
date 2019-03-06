from PyPoE.poe.file.dat import RelationalReader
from PyPoE.poe.file.translations import TranslationFileCache
from PyPoE.poe.sim.mods import get_translation
import json
from json import JSONEncoder

class Map:
	def __init__(self, id, name, tier, connections, unique, world_id):
		self.id = id
		self.name = name
		self.tier = tier
		self.connections = connections
		self.unique = unique
		self.world_id = world_id
		self.pantheon = False
		self.pantheon_text = ''
		self.upgrades_from = []
		
	def __str__(self):
		return "id: {}, name: '{}', tier: {}, upgradesFrom: {}, pantheon: {}, pantheonText: '{}', unique: {}"\
			.format(self.id, self.name.replace('\'', '\\\''), self.tier, self.upgrades_from,\
					str(self.pantheon).lower(), self.pantheon_text, str(self.unique).lower())
		
	def __repr__(self):
		return "id: {}, name: {}, tier: {}, upgradesFrom: {}, pantheon: {}"\
			.format(self.id, self.name, self.tier, self.upgrades_from, self.pantheon)
			
class Soul:
	def __init__(self, map_id, soul_name):
		self.map_id = map_id
		self.soul_name = soul_name
		
class UpgradeMap:
	def __init__(self, id, name):
		self.id = id
		self.name = name
		
	def __str__(self):
		return "{{id: {}, name: '{}'}}".format(self.id, self.name)
		
	def __repr__(self):
		return "{{id: {}, name: '{}'}}".format(self.id, self.name)
			
maps = []
pantheon = []

# Path data is extracted to, only need Metadata/Data
path = 'D:/Temp/'

# speed things up
opt = {
	'use_dat_value': False,
	'auto_build_index': True,
}

r = RelationalReader(
	path_or_ggpk=path,
	read_options=opt,
)

tc = TranslationFileCache(path_or_ggpk=path)

r['Maps.dat'].build_index('Regular_WorldAreasKey')
r['Maps.dat'].build_index('Unique_WorldAreasKey')
r['PantheonSouls.dat'].build_index('BaseItemTypesKey')

for node in r['AtlasNode.dat']:
	map = r['Maps.dat'].index['Regular_WorldAreasKey'].get(node['WorldAreasKey'])
	unique = False
	if map is None:
		map = r['Maps.dat'].index['Unique_WorldAreasKey'].get(node['WorldAreasKey'])
		unique = True
	if map is None:
		print('Missing: %s' % node['WorldAreasKey']['Id'])
		continue
	# indexing creates a list unless unique is specified for the field in the specification
	map = map[0]
		
	map_name = node['WorldAreasKey']['Name']
	map_tier = node['Tier']
	connected_maps = [n.rowid for n in node['AtlasNodeKeys']]
	world_id = node['WorldAreasKey'].rowid
	
	maps.append(Map(node.rowid, map_name, map_tier, connected_maps, unique, world_id))

for node in r['PantheonSouls.dat']:
	pantheon.append(Soul(node['Key0'], node['BaseItemTypesKey']['Name'].replace('\'', '\\\'')))

for map in maps:
	if len(map.connections) > 0:
		for connection in map.connections:
			if maps[connection].tier < map.tier:
				map.upgrades_from.append(\
					UpgradeMap(maps[connection].id,\
					maps[connection].name.replace('\'', '\\\'')))
	
	for soul in pantheon:
		if soul.map_id == map.world_id:
			map.pantheon = str(True).lower()
			map.pantheon_text = soul.soul_name

with open('maps.js', 'w', encoding='utf-8') as outfile:
	outfile.write('const maps = [\n')
	
	for map in maps:
		outfile.write('\t{ ' + str(map) + ' },\n')
	
	outfile.write('];\n\nexport default maps;\n')
# *** print to file in JS array/object format instead of JSON
# with open('map-data.json', 'w') as outfile:
	# json.dump(maps, outfile, indent="\t", default=lambda o: o.__dict__, 
		# sort_keys=False)
#PantheonSouls.dat
# Key0 = 975, 1054 the WorldAreasKey where you can capture

#BaseItemKey = exact pantheon upgrade (5132, 5133, 5134)


# WorldArea 979 = AtlasNode 148 (Pen Tier 2)	Upgrade From Map 326 = WorldArea 974 = Lookout