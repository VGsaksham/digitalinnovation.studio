#!/usr/bin/env python3
"""
Digital Innovation Studio Auto-Upload Script
Automatically commits and pushes changes to GitHub repository
"""

import subprocess
import sys
import os
from datetime import datetime

def run_command(command, description):
    """Run a command and handle errors"""
    print(f"{description}...")
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True)
        if result.returncode == 0:
            print(f"✓ {description} completed successfully")
            if result.stdout.strip():
                print(f"  Output: {result.stdout.strip()}")
        else:
            print(f"✗ {description} failed")
            print(f"  Error: {result.stderr.strip()}")
            return False
        return True
    except Exception as e:
        print(f"✗ {description} failed with exception: {e}")
        return False

def main():
    print("=" * 50)
    print("  Digital Innovation Studio Auto-Upload")
    print("=" * 50)
    print()
    
    # Check if git is initialized
    if not os.path.exists(".git"):
        print("Initializing git repository...")
        if not run_command("git init", "Git initialization"):
            return False
        
        if not run_command("git remote add origin https://github.com/VGsaksham/digitalinnovation.studio.git", "Adding remote origin"):
            return False
        
        print("✓ Git repository initialized!")
        print()
    
    # Get current timestamp
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    # Add all changes
    if not run_command("git add .", "Adding all changes to git"):
        return False
    
    # Commit changes
    commit_message = f"Auto-upload: {timestamp}"
    if not run_command(f'git commit -m "{commit_message}"', f"Committing changes with timestamp: {timestamp}"):
        return False
    
    # Push to GitHub
    if not run_command("git push origin main", "Pushing changes to GitHub"):
        return False
    
    print()
    print("=" * 50)
    print("  Upload completed successfully!")
    print("=" * 50)
    print()
    print("Changes have been pushed to:")
    print("https://github.com/VGsaksham/digitalinnovation.studio.git")
    print()
    
    return True

if __name__ == "__main__":
    try:
        success = main()
        if not success:
            print("\n❌ Upload failed! Please check the errors above.")
            sys.exit(1)
        else:
            print("\n✅ All operations completed successfully!")
    except KeyboardInterrupt:
        print("\n\n⚠️  Operation cancelled by user.")
        sys.exit(1)
    except Exception as e:
        print(f"\n❌ Unexpected error: {e}")
        sys.exit(1)