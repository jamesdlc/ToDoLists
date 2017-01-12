
l1 = Todolist.create(name: 'sample list')

l1.listitems << Listitem.create(task: 'water plants')
l1.listitems << Listitem.create(task: 'take out garbage')
l1.listitems << Listitem.create(task: 'do homework')

l2 = Todolist.create(name: 'student list')

l2.listitems << Listitem.create(task: 'create project ideas')
l2.listitems << Listitem.create(task: 'do reading')
l2.listitems << Listitem.create(task: 'do homework')

p "#{Todolist.all.count} Todo Lists created!"
p "#{Listitem.all.count} List Items created!"
p "done!"
