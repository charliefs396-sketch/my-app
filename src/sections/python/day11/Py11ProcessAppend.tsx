import CodeBlock from '../../../components/CodeBlock';

export default function Py11ProcessAppend() {
  return (
    <div className="animate-fade-in-up space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-900">📝 Processing & Appending</h2>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">➕ Append Mode</h3>
        <CodeBlock language="python" code={`# APPEND mode - adds to end, does NOT delete existing data
with open("students.txt", "a") as f:
    f.write("Maria,88\\n")
    f.write("Tom,71\\n")

# File now has 5 students instead of 3!`} />
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <h4 className="font-bold text-green-800 mb-1">✅ "a" mode</h4>
            <p className="text-green-700 text-sm">Adds to END of file. Creates file if it doesn't exist.</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <h4 className="font-bold text-red-800 mb-1">❌ "w" mode mistake</h4>
            <p className="text-red-700 text-sm">Using "w" to add more data WIPES everything first!</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">🔍 Search for a Record</h3>
        <CodeBlock language="python" code={`def search_student(filename, target_name):
    with open(filename, "r") as f:
        for line in f:
            parts = line.strip().split(",")
            name = parts[0]
            mark = int(parts[1])
            if name.lower() == target_name.lower():
                return mark    # Found!
    return -1                  # Not found

# Usage
result = search_student("students.txt", "Ali")
if result != -1:
    print(f"Ali scored {result}")
else:
    print("Student not found")`} />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">🗑️ Delete a Record (Read → Skip → Write Back)</h3>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
          <p className="text-amber-800 text-sm font-semibold">⚠️ You CANNOT delete from a file directly. You must: 1) Read all lines, 2) Skip the one to delete, 3) Write the rest back.</p>
        </div>
        <CodeBlock language="python" code={`def delete_student(filename, target_name):
    # Step 1: Read all lines
    with open(filename, "r") as f:
        lines = f.readlines()
    
    # Step 2: Filter out the target
    kept = []
    found = False
    for line in lines:
        name = line.strip().split(",")[0]
        if name.lower() == target_name.lower():
            found = True        # Skip this line (delete it)
        else:
            kept.append(line)   # Keep this line
    
    # Step 3: Write back
    with open(filename, "w") as f:
        f.writelines(kept)
    
    return found

# Usage
if delete_student("students.txt", "John"):
    print("John deleted successfully")
else:
    print("John not found")`} />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Complete CRUD System</h3>
        <CodeBlock language="python" code={`FILENAME = "students.txt"

def save_student(name, mark):
    with open(FILENAME, "a") as f:
        f.write(f"{name},{mark}\\n")

def display_all():
    with open(FILENAME, "r") as f:
        for line in f:
            parts = line.strip().split(",")
            print(f"Name: {parts[0]}, Mark: {parts[1]}")

def search(name):
    with open(FILENAME, "r") as f:
        for line in f:
            parts = line.strip().split(",")
            if parts[0].lower() == name.lower():
                return int(parts[1])
    return -1

# Create file with initial data
with open(FILENAME, "w") as f:
    f.write("Ali,85\\nSara,92\\nJohn,78\\n")

save_student("Maria", 88)
display_all()
print(search("Sara"))   # 92`} />
      </div>
    </div>
  );
}
